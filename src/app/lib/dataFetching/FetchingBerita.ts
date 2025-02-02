import { prisma } from "@/app/lib/prisma";

export const getBerita = async () => {
  try {
    const result = await prisma.berita.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getBeritaById = async (id: string) => {
  try {
    const result = await prisma.berita.findUnique({
      where: {
        id,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
