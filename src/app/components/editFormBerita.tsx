"use client";

import { useSession } from "next-auth/react";
import LoadingLogin from "@/app/components/LoadingLogin";
import { updataBerita } from "@/app/lib/InputBerita";
import { useActionState, useEffect } from "react";
import { ButtonActionBerita } from "@/app/components/ButtonActionBerita";
import type { Berita } from "@prisma/client";
import Link from "next/link";
import JoditEditor from "jodit-react";
import { useState, useRef, Suspense } from "react";

const DashboardAdmin = ({ data }: { data: Berita }) => {
  const [state, formAction] = useActionState(updataBerita.bind(null, data.id), null);
  const { status } = useSession();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    // Simulasi pengambilan data dari API atau database
    const fetchData = async () => {
      const previousText = data.description; // Gantikan dengan data asli
      setContent(previousText);
    };
    fetchData();
  }, []);

  if (status == "loading") {
    return <LoadingLogin />;
  }

  return (
    <div className="">
      <div className="">
        <p className="text-2xl font-bold text-center mb-6">Update Berita</p>
        <form action={formAction}>
          <div className="mb-5">
            <input type="text" name="title" placeholder="Titile" className="input input-bordered input-info w-full max-w-xs" defaultValue={data.title} />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-600 font-bold text-sm mt-2">{state?.error?.title}</p>
            </div>
          </div>
          <div className="max-w-full mb-5">
            {/* <textarea defaultValue={data.description} className="textarea textarea-primary w-full" placeholder="Deaskripsi" name="description"></textarea> */}
            <Suspense fallback={<div>Loading...</div>}>
              <JoditEditor
                ref={editor}
                value={content}
                name="description"
                // config={config}
                tabIndex={1} // tabIndex of textarea
                onChange={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              />
            </Suspense>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-600 font-bold text-sm mt-2">{state?.error?.description}</p>
            </div>
          </div>

          <div className="mb-5">
            <input type="file" name="image" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-600 font-bold text-sm mt-2">{state?.error?.image}</p>
            </div>
          </div>
          <ButtonActionBerita label="updateBerita" />
        </form>
        <hr className="mt-3 mb-2" />
        <Link href="/dashboard/berita" className="text-center underline text-blue-500">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default DashboardAdmin;
