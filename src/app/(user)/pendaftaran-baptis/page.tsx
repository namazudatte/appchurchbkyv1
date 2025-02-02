"use client";

import FormPengajuanBaptis from "@/app/components/pengajuan/FormPengajuanBaptis";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function pendaftaranBaptis() {
  const { status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <div>
      <FormPengajuanBaptis />
    </div>
  );
}
