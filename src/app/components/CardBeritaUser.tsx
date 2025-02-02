"use client";
import Image from "next/image";
import type { Berita } from "@prisma/client";
import Readmore from "./Button/ReadMore";
import { useEffect, useState } from "react";
import Skeleton from "@/app/components/Loading/Skeleton";

export default function CardBeritaUser({ data }: { data: Berita }) {
  const [Loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(false);
  }, []);

  if (Loading) {
    return <Skeleton />;
  }
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow mx-5 lg:mx-0">
      <div className="relative aspect-video">
        <Image src={data.image} alt="foto berita" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-t-md object-cover" />
      </div>
      <div className="p-5">
        <p className="font-bold text-xl mb-3">{data.title}</p>
        {/* <p>{data.description}</p> */}
      </div>
      <Readmore id={data.id} />
    </div>
  );
}
