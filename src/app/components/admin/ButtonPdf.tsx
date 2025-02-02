"use client";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { AiFillPrinter } from "react-icons/ai";

interface Pengajuan {
  id: string;
  image: string;
  fullname: string;
  nameBaptis: string;
  jenisKelamin: string;
  alamat: string;
  nameAyah: string;
  nameIbu: string;
}

declare module "jspdf" {
  interface jsPDF {
    lastAutoTable?: {
      finalY: number; // Y-coordinate of the last table's bottom position
    };
  }
}

const ClientButton = ({ pengajuans }: { pengajuans: Pengajuan[] }) => {
  const fetchImageToBase64 = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  const handlePDF = async () => {
    const doc = new jsPDF();
    doc.text("Daftar Pengajuan Baptis - Semua User", 10, 10);

    const tableColumn = ["Nama Lengkap", "Nama Baptis", "Jenis Kelamin", "Alamat", "Nama Ayah", "Nama Ibu"];

    const tableRows: any[] = [];

    for (const pengajuan of pengajuans) {
      const imageBase64 = await fetchImageToBase64(pengajuan.image);
      if (!imageBase64) {
        console.warn(`Failed to load image for pengajuan ID: ${pengajuan.id}`);
        tableRows.push(["Placeholder", pengajuan.image, pengajuan.fullname, pengajuan.nameBaptis, pengajuan.jenisKelamin, pengajuan.alamat, pengajuan.nameAyah, pengajuan.nameIbu]);
        continue;
      }

      tableRows.push([imageBase64, pengajuan.fullname, pengajuan.nameBaptis, pengajuan.jenisKelamin, pengajuan.alamat, pengajuan.nameAyah, pengajuan.nameIbu]);
    }

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows.map((row) => {
        const [image, ...rest] = row;
        const x = 10;
        const y = doc.lastAutoTable ? doc.lastAutoTable.finalY + 5 : 20;
        const width = 15;
        const height = 15;

        if (image && x >= 0 && y >= 0 && width > 0 && height > 0) {
          doc.addImage(image, "JPEG", x, y, width, height);
        }
        return rest;
      }),
      startY: 20,
    });

    doc.save("daftar_pengajuan_admin.pdf");
  };

  return (
    <button onClick={handlePDF} className="btn btn-primary rounded-lg mb-5 text-white flex items-center gap-2">
      <AiFillPrinter />
      Cetak Laporan
    </button>
  );
};

export default ClientButton;
