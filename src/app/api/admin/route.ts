import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const dataPengajuan = await prisma.pengajuanBaptis.findMany();
    return NextResponse.json(dataPengajuan);
  } catch (error) {
    return NextResponse.json(`get data error: ${error}`);
  }
}
