// import { getPengajuan } from "@/app/lib/dataFetching/Pengajuan";
"use client";
// import { getPengajuanByUser } from "@/app/lib/dataFetching/Pengajuan";
// import ButtonPdf from "./ButtonPdf";
import Image from "next/image";
import { FormatDate } from "@/app/utils/formatDate";
// import { PengajuanBaptis } from "@prisma/client";
import CetakKartuBaptis from "@/app/components/admin/CetakKartuBaptis";
import { useEffect, useState } from "react";

interface dataPengajuan {
  id: string;
  userId: string;
  fullname: string;
  nameBaptis: string;
  nameAyah: string;
  nameIbu: string;
  alamat: string;
  image: string;
  jenisKelamin: string;
  jenisBaptis: string;
  createdAt: string;
}

const Pengajuan = () => {
  const [dataPengajuan, setDataPengajuan] = useState<dataPengajuan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataPengajuan = async () => {
      try {
        const respons = await fetch("/api/admin");
        const data = await respons.json();
        setDataPengajuan(data);
        setLoading(false);
      } catch (error) {
        console.log(`error get data pengajuan : ${error}`);
      }
    };
    fetchDataPengajuan();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto mt-10">
      <p className="text-center mt-20 mb-10 text-2xl font-bold">Halaman Pengajuan Pendaftaran Baptis🕊️🕊️</p>
      {/* <ButtonPdf pengajuans={pengajuans} /> */}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Nama Lengkap</th>
            <th>Nama Baptis</th>
            <th>Jenis Baptis</th>
            <th>Nama Ayah</th>
            <th>Nama Ibu</th>
            <th>Alamat</th>
            <th>Tanggal Pengajuan</th>
            <th>Aksi</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dataPengajuan.map((pengajuan) => (
            <tr key={pengajuan.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      {pengajuan.image ? (
                        <Image src={pengajuan.image || "profile-default-avatar.jpg"} alt={pengajuan.fullname} width={20} height={20} />
                      ) : (
                        <span>No Image</span> // Atau bisa pakai gambar default
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{pengajuan.fullname}</div>
                    <div className="text-sm opacity-50">{pengajuan.jenisKelamin}</div>
                  </div>
                </div>
              </td>
              <td>{pengajuan.nameBaptis}</td>

              <td>
                {pengajuan.jenisBaptis}
                <br />
                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
              </td>
              <td>{pengajuan.nameAyah}</td>
              <td>{pengajuan.nameIbu}</td>
              <td>{pengajuan.alamat}</td>
              <td>{FormatDate(pengajuan.createdAt.toString())}</td>

              <th>
                <CetakKartuBaptis
                  userId={pengajuan.id}
                  fullname={pengajuan.fullname}
                  image={pengajuan.image}
                  nameBaptis={pengajuan.nameBaptis}
                  alamat={pengajuan.alamat}
                  jenisKelamin={pengajuan.jenisKelamin}
                  jenisBaptis={pengajuan.jenisBaptis}
                  nameAyah={pengajuan.nameAyah}
                  nameIbu={pengajuan.nameIbu}
                  tanggalPengajuan={FormatDate(pengajuan.createdAt.toString())}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pengajuan;
