"use client";

import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deletePengajuanBaptis, getPengajuanById } from "@/app/lib/pengajuan/InputPengajuanBaptis";

export const SubmitPengajuanBaptis = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={clsx("btn btn-primary", { "opacity-5": pending })} disabled={pending}>
      {<>{pending ? "Loading..." : "Input Pengajuan"}</>}
    </button>
  );
};

export const EditPengajuanBaptis = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={clsx("btn btn-primary", { "opacity-5": pending })} disabled={pending}>
      {<>{pending ? "Loading..." : "Edit Pengajuan"}</>}
    </button>
  );
};

export const EditButtonPengajuan = ({ id }: { id: string }) => {
  if (!id) return null;
  return (
    <Link href={`/daftar-pengajuan/edit/${id}`} className=" btn btn-info rounded-full text-lg mb-3">
      <AiFillEdit />
    </Link>
  );
};

export const DeleteButtonPengajuan = ({ id }: { id: string }) => {
  const deletePengajuanById = deletePengajuanBaptis.bind(null, id);

  if (!id) return null; // Validasi id
  return (
    <form action={deletePengajuanById} className="btn  btn-error">
      <DeleteBtnPengajuanBaptis />
    </form>
  );
};

const DeleteBtnPengajuanBaptis = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="text-lg">
      {pending ? <AiFillDelete className="opacity-5 cursor-progress" /> : <AiFillDelete />}
    </button>
  );
};
