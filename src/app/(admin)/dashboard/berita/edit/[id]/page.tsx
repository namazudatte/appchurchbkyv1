import DashboardAdmin from "@/app/components/editFormBerita";
import { getBeritaById } from "@/app/lib/dataFetching/FetchingBerita";
import { notFound } from "next/navigation";

const EditPage = async ({ params }: { params: { id: string } }) => {
  const data = await getBeritaById(params.id);
  if (!data) return notFound();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow p-10">
        <DashboardAdmin data={data} />
      </div>
    </div>
  );
};

export default EditPage;
