import CardBeritaUser from "@/app/components/CardBeritaUser";
import { getBerita } from "@/app/lib/dataFetching/FetchingBerita";

export default async function BeritaPage() {
  const berita = await getBerita();

  return (
    <div className="max-w-screen-lg mx-auto py-14">
      <p className="text-black mb-8 mt-10 font-bold text-2xl">Berita Paroki</p>
      <div className="flex items-end justify-between">
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {berita?.map((item) => (
            <CardBeritaUser key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
