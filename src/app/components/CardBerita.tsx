"use client";

import Image from "next/image";
import { DeleteButton, EditButton } from "./ButtonActionBerita";
import type { Berita } from "@prisma/client";
import { FormatDate } from "../utils/formatDate";
import { useState, useEffect } from "react";
import Skeloton from "@/app/components/Loading/Skeleton";

export default function CardBerita({ data }: { data: Berita }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Skeloton />;
  }
  return (
    <div className="overflow-x-auto min-w-full ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Gambar Berita</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th></th>
            <td>
              <div className="flex items-center gap-10">
                <div className="avatar">
                  <div className="mask h-40 w-40 ">
                    <Image src={data.image} alt="gambar berita" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-t-md object-cover" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-2xl w-50 ">{data.title}</div>
                  <div className="text-sm opacity-50 mb-3 mt-3">{FormatDate(data.createdAt.toString())} - Input Berita</div>
                  <div className="text-sm opacity-50">{FormatDate(data.updatedAt.toString())} - Update Berita</div>
                </div>
              </div>
            </td>
            <td className="">
              <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
              {/* <p dangerouslySetInnerHTML={{}}>{data.description}</p> */}

              <br />
              {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td className="m-1">
              <EditButton id={data.id} />
            </td>
            <td>
              <DeleteButton id={data.id} />
            </td>
            <th></th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Gambar Berita</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
