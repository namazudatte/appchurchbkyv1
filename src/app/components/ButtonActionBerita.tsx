"use client";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { deleteBerita } from "@/app/lib/InputBerita";
import LoadingButton from "@/app/components/Loading/LoadingButton";

export const ButtonActionBerita = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-center items-center">
      <button
        type="submit"
        disabled={pending}
        className={clsx("btn btn-primary rounded-lg text-white", {
          "cursor-progress": pending,
        })}
      >
        {label === "inputBerita" ? <>{pending ? <LoadingButton /> : "Input Berita"}</> : <>{pending ? "Updateting..." : "Update"}</>}
      </button>
    </div>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`berita/edit/${id}`} className="btn btn-primary text-white">
      <AiFillEdit />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteBeritaById = deleteBerita.bind(null, id);
  return (
    <form action={deleteBeritaById} className="btn btn-error text-white">
      <ActionDelete />
    </form>
  );
};

const ActionDelete = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? <LoadingButton /> : <AiFillDelete />}
    </button>
  );
};
