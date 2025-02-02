"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
// import Image from "next/image";
import { CiLogout } from "react-icons/ci";

const SignButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p className="hidden md:block font-bold">{`Hello, ${session.user.name}`}</p>

        {/* <Image src={session.user.image ?? ""} alt={session.user.name ?? ""} width={32} height={32} /> */}
        <button onClick={() => signOut()} className="font-bold text-red-500 ">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        redirect("/login");
      }}
      className="text-white bg-violet-700 p-2 rounded-lg"
    >
      Sign In
    </button>
  );
};

export default SignButton;
