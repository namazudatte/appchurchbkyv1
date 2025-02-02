import CardBerita from "@/app/components/CardBerita";
import Link from "next/link";
import { getBerita } from "@/app/lib/dataFetching/FetchingBerita";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

export default async function BeritaAdminPage() {
  // const { data: session } = useSession();
  const berita = await getBerita();

  // if (!session?.user || session?.user?.role !== "admin") {
  //   redirect("/login");
  // }

  return (
    <div className="max-w-screen-xl mx-auto py-14 mt-20">
      <div className="flex items-end justify-between">
        <p className="font-bold text-3xl">Kelola Berita Paroki 🧑‍💻🧑‍💻</p>
        <Link href="/dashboard" className="bg-green-300 py-2 px-4 font-semibold rounded-lg hover:bg-green-200">
          Tambar Berita
        </Link>
      </div>

      <div className="grid md:grid-cols-1 gap-2 mt-10 mb-20">
        {berita?.map((item) => (
          <CardBerita key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
