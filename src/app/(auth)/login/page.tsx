"use client";

import LoginForm from "@/app/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
export default function LoginPage() {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }
  return (
    <div className="relative size-full items-center justify-center overflow-hidden rounded-lg border bg-background  md:shadow-xl">
      <DotPattern className={cn("[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)] -z-0 opacity-50")} />
      <LoginForm />
    </div>
  );
}
