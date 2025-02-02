"use server";
import { prisma } from "@/app/lib/prisma";
import { EditScemaInputPengajuanBaptis, ScemaInputPengajuanBaptis } from "./ScemaPengajuan";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { del, put } from "@vercel/blob";

// input pengajuan
export const pengajuanBaptis = async (prevState: unknown, formData: FormData) => {
  const validasiInputPengajuan = ScemaInputPengajuanBaptis.safeParse(Object.fromEntries(formData.entries()));

  if (!validasiInputPengajuan.success) {
    return {
      error: validasiInputPengajuan.error.flatten().fieldErrors,
    };
  }

  const { fullname, nameBaptis, jenisKelamin, alamat, nameAyah, nameIbu, jenisBaptis, image } = validasiInputPengajuan.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return {
      error: { meesage: "User Tidak Autentikasi" },
    };
  }

  const userId = session.user.id;
  try {
    await prisma.pengajuanBaptis.create({
      data: {
        fullname,
        nameBaptis,
        jenisKelamin,
        alamat,
        nameAyah,
        nameIbu,
        jenisBaptis,
        image: url,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    console.log(`error create data: ${error}`);
  }

  redirect("/daftar-pengajuan");
};

// edit pengajuan baptis
export const EditPengajuanBaptisAction = async (id: string, prevState: unknown, formData: FormData) => {
  const validasiInputPengajuan = EditScemaInputPengajuanBaptis.safeParse(Object.fromEntries(formData.entries()));

  if (!validasiInputPengajuan.success) {
    return {
      error: validasiInputPengajuan.error.flatten().fieldErrors,
    };
  }

  const data = await getPengajuanById(id);

  if (!data) return { message: "Tidak ada data" };

  const { fullname, nameBaptis, jenisKelamin, alamat, nameAyah, nameIbu, jenisBaptis, image } = validasiInputPengajuan.data;

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
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return {
      error: { meesage: "User Tidak Autentikasi" },
    };
  }

  const userId = session.user.id;
  try {
    await prisma.pengajuanBaptis.update({
      data: {
        fullname,
        nameBaptis,
        jenisKelamin,
        alamat,
        nameAyah,
        nameIbu,
        jenisBaptis,
        image: imagePath,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      where: { id },
    });
  } catch (error) {
    console.log(`error update data pengajuan: ${error}`);
  }
  revalidatePath("/daftar-pengajuan");
  redirect("/daftar-pengajuan");
};

// getPengajuan by id

export const getPengajuanById = async (id: string) => {
  try {
    const result = await prisma.pengajuanBaptis.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const deletePengajuanBaptis = async (id: string) => {
  const data = await getPengajuanById(id);
  if (!data) return { message: "tidak ada data pengajuan Baptis" };

  try {
    await prisma.pengajuanBaptis.delete({
      where: { id },
    });
  } catch (error) {
    console.log(`gagal delete data pengajuan Baptis : ${error}`);
  }
  revalidatePath("/daftar-pengajuan");
};
