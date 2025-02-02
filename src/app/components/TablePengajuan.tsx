// import { getPengajuan } from "@/app/lib/dataFetching/Pengajuan";
import { getPengajuanByUser } from "@/app/lib/dataFetching/Pengajuan";
import { FormatDate } from "@/app/utils/formatDate";
import { DeleteButtonPengajuan, EditButtonPengajuan } from "./pengajuan/ButtonAction";
import type { PengajuanBaptis } from "@prisma/client";

const Pengajuan = async ({ data }: { data: PengajuanBaptis }) => {
  const pengajuans = await getPengajuanByUser();
  if (!pengajuans) return console.log("Data Not Found");

  return (
    <div className="max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Lengkap</th>
              <th>Nama Baptis</th>
              <th>Jenis Baptis</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Nama Ayah</th>
              <th>Nama Ibu</th>
              <th>Tanggal Pengajuan</th>
              <th>Dibuat Oleh</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pengajuans.map((pengajuan, index) => (
              <tr key={pengajuan.id}>
                <th>{index + 1}</th>
                <th>{pengajuan.fullname}</th>
                <td>{pengajuan.nameBaptis}</td>
                <td>{pengajuan.jenisBaptis}</td>
                <td>{pengajuan.jenisKelamin}</td>
                <td>{pengajuan.alamat}</td>
                <td>{pengajuan.nameAyah}</td>
                <td>{pengajuan.nameIbu}</td>
                <td>{FormatDate(pengajuan.createdAt.toString())}</td>
                <td>{pengajuan.user.name}</td>
                <td>
                  <EditButtonPengajuan id={pengajuan.id} />
                  <DeleteButtonPengajuan id={pengajuan.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pengajuan;
