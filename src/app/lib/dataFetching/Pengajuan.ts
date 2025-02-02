import { prisma } from "@/app/lib/prisma";
// import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const getPengajuanByUser = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (!session || !session.user) {
    redirect("/");
    return;
  }
  const userId = session.user.id;

  console.log(`User ID: ${userId}, Role: ${role}`);
  try {
    if (role === "admin") {
      try {
        const pengajuan = await prisma.pengajuanBaptis.findMany({
          include: { user: { select: { name: true } } },
        });
        return pengajuan;
      } catch (error) {
        console.log(`error get data: ${error}`);
      }
    } else {
      try {
        return await prisma.pengajuanBaptis.findMany({
          where: { userId: session.user.id },
          include: { user: { select: { name: true } } },
        });
      } catch (error) {
        console.log(`error get data: ${error}`);
      }
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export const getAllPengajuan = async () => {
  try {
    const pengajuan = prisma.pengajuanBaptis.findMany();
    return pengajuan;
  } catch (error) {
    console.log(`tidak ada data pengajuan: ${error}`);
  }
};
