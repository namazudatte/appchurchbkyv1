import { getBeritaById } from "@/app/lib/dataFetching/FetchingBerita";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FormatDate } from "@/app/utils/formatDate";

const ReadMorePage = async ({ params }: { params: { id: string } }) => {
  const data = await getBeritaById(params.id);
  if (!data) return notFound();

  return (
    <div className="flex justify-center flex-col mt-24 max-w-screen-sm mx-auto">
      <h2 className="text-3xl font-bold text-cyan-950 text-center">{data.title}</h2>
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">{FormatDate(data.createdAt.toString())}</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <figure className="mt-20 mx-auto mt">
        <Image src={data.image} alt="Shoes" width={700} height={700} />
      </figure>
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      <div className="card-actions justify-start mt-32 mb-20">
        <Link href="/berita">
          <InteractiveHoverButton>Kembali</InteractiveHoverButton>
        </Link>
      </div>
    </div>
  );
};

export default ReadMorePage;
