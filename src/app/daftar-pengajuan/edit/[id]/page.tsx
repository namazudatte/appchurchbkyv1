import EditFormPengajuanBaptis from "@/app/components/pengajuan/EditFormPengajuanBaptis";
import { getPengajuanById } from "@/app/lib/pengajuan/InputPengajuanBaptis";
import { notFound } from "next/navigation";

const EditPengajuanBaptisPage = async ({ params }: { params: { id: string } }) => {
  const data = await getPengajuanById(params.id);
  if (!data) return notFound();
  return (
    <div>
      <EditFormPengajuanBaptis data={data} />
    </div>
  );
};

export default EditPengajuanBaptisPage;
