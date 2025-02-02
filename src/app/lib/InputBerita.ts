"use server";
import { z } from "zod";
import { put, del } from "@vercel/blob";
import { getBeritaById } from "@/app/lib/dataFetching/FetchingBerita";
import { NextResponse } from "next/server";

// import { prisma } from "@/app/lib/prisma";
import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ScemaInputBerita = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image wajib diisi" })
    .refine((file) => file.size <= 4000000, { message: "Size image harus lebih kecil dari 4 MB" })
    .refine((file) => file.type.startsWith("image/"), { message: "File hanya dapat berupa image" }),
});

const ScemaUpdateBerita = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 4000000, { message: "size image harus lebih kecil dari 4 MB" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), { message: "file hanya dapat image" })
    .optional(),
});

// input berita
export const InputBerita = async (prevState: unknown, formData: FormData) => {
  const validasiInputBerita = ScemaInputBerita.safeParse(Object.fromEntries(formData.entries()));

  if (!validasiInputBerita.success) {
    console.log(validasiInputBerita.error.flatten().fieldErrors);
    return { error: validasiInputBerita.error.flatten().fieldErrors };
  }

  const { title, description, image } = validasiInputBerita.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  try {
    await prisma.berita.create({
      data: {
        title,
        description,
        image: url,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: `Gagal input berita ${error}` }, { status: 500 });
  }

  revalidatePath("/dashboard/berita");
  redirect("/dashboard/berita");
};

// updata berita
export const updataBerita = async (id: string, prevState: unknown, formData: FormData) => {
  const validasiInputBerita = ScemaUpdateBerita.safeParse(Object.fromEntries(formData.entries()));

  if (!validasiInputBerita.success) {
    return {
      error: validasiInputBerita.error.flatten().fieldErrors,
    };
  }

  const data = await getBeritaById(id);
  if (!data) return { message: "Data Tidak di Temukan" };

  const { title, description, image } = validasiInputBerita.data;

  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    imagePath = url;
  }

  try {
    await prisma.berita.update({
      data: {
        title,
        description,
        image: imagePath,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: `Gagal input berita ${error}` }, { status: 500 });
  }

  revalidatePath("/dashboard/berita");
  redirect("/dashboard/berita");
};

// delete berita
export const deleteBerita = async (id: string) => {
  const data = await getBeritaById(id);
  if (!data) return { message: "Data Not Found" };

  await del(data.image);
  try {
    await prisma.berita.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(`error: ${error}`);
  }

  revalidatePath("/dashboard/berita");
};
