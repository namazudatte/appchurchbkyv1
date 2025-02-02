"use client";

import React from "react";
import Link from "next/link";
import { useActionState } from "react";
import { RegisterCredential } from "@/app/lib/authAction/action";
import { ButtonRegister } from "@/app/components/auth/ButtonRegister";

const RegisterForm = () => {
  const [state, formAction] = useActionState(RegisterCredential, null);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-10">
          <h1 className="text-5xl font-bold mb-5 ">Registrasi Form🧑‍💻🧑‍💻</h1>
          <p className="py-6">Silahkan buat akun anda untuk login di dalam aplikasi</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex flex-col justify-center mx-auto mt-10">
          <p className="text-center mt-5 font-bold text-2xl">Registrasi Page</p>
          <form action={formAction} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fullname</span>
              </label>
              <input type="text" name="name" placeholder="Fullname" className="input input-bordered" required />
            </div>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-3">{state?.error?.name}</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" name="username" placeholder="username" className="input input-bordered" required />
            </div>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-3">{state?.error?.username}</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-3">{state?.error?.email}</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-3">{state?.error?.password}</span>
            </div>
            <ButtonRegister />
            <hr />
            <p className="mt-4">
              Sudah punya akun?
              <Link href="/login" className="text-blue-600  font-semibold">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
