"use client";

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LoadingLogin from "@/app/components/LoadingLogin";
import { InputBerita } from "@/app/lib/InputBerita";
import { useActionState } from "react";
import { ButtonActionBerita } from "@/app/components/ButtonActionBerita";
import Link from "next/link";
// import Menu from "@/app/components/admin/Menu";
import React, { useState, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const FallbackError = ({ error }) => {
  return <div>Error Loading Text Editor : {error.message}</div>;
};

export default function DashboardAdmin() {
  const [state, formAction] = useActionState(InputBerita, null);
  const { data: session, status } = useSession();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  if (status == "loading") {
    return <LoadingLogin />;
  }

  if (!session?.user || session?.user?.role !== "admin") {
    redirect("/login");
  }

  return (
    <>
      <div className="min-h-screen flex flex-col relative size-full items-center justify-center overflow-hidden rounded-lg border bg-background  md:shadow-xl mt-10">
        <DotPattern className={cn("[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)] -z-0 opacity-50")} />
        {/* <Menu /> */}
        <div className="bg-white rounded-lg  p-10 z-10 shadow-2xl">
          <p className="text-2xl font-bold text-center mb-20">Input Berita Paroki</p>
          <form action={formAction}>
            <div className="mb-5">
              <input type="text" name="title" placeholder="Judul Berita" className="input input-bordered input-info w-full max-w-screen-md" />
              <div aria-live="polite" aria-atomic="true">
                <p className="text-red-600 font-bold text-sm mt-2">{state?.error?.title}</p>
              </div>
            </div>
            <div className="max-w-full mb-5">
              {/* <textarea className="textarea textarea-primary w-full" placeholder="Deaskripsi" name="description"></textarea> */}
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary FallbackComponent={FallbackError}>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    name="description"
                    // config={config}
                    tabIndex={1} // tabIndex of textarea
                    onChange={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  />
                </ErrorBoundary>
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
            <ButtonActionBerita label="inputBerita" />
            <hr className="mt-3 mb-2" />
            <Link href="/dashboard/berita" className="text-center underline btn btn-info rounded-full text-white">
              Lihat Berita
            </Link>
          </form>
        </div>
        {/* <div className="circle-position w-[590px] h-[400px] bg-violet-500 rounded-[100%] absolute z-0 top-[70%] left-[80%] translate-x-[-50%] translate-y-[-50%] blur-[250px]"></div> */}
      </div>
    </>
  );
}
