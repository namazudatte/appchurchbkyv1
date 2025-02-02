"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
// import { BiKey } from "react-icons/bi";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result?.ok) {
      setError("Email atau Password Salah");
    } else {
      window.location.href = "/";
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen z-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-10">
          <h1 className="text-5xl font-bold mb-5 ">Helllo..Sobat Katolik⭐⭐</h1>
          <p className="py-6">Silahkan Login untuk menggukan fitur pelayanan Paroki St. Pius X Bengkayang</p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <p className="mt-5 font-bold text-2xl text-center">Login Page</p>
          <form onSubmit={HandleSubmit} className="card-body">
            {error && <p className="text-red-500 mt-2 text-center font-semibold ">{error}</p>}
            {/* test */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div aria-live="polite" aria-atomic="true">
              {/* <span className="text-sm text-red-500 mt-3">{state?.error?.email}</span> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div aria-live="polite" aria-atomic="true">
                {/* <span className="text-sm text-red-500 mt-3">{state?.error?.password}</span> */}
              </div>
              <input name="password" type="password" placeholder="password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} />

              <button type="submit" className="btn mt-4">
                Login
              </button>
            </div>
            <p className="mt-4">
              Belum Punya Akun?
              <Link href="/register" className="text-blue-600 font-semibold">
                {" "}
                Register Disini
              </Link>
            </p>
            <hr className="mt-3" />
            {/* test */}
            <div className="form-control mt-6">
              <button onClick={() => signIn("google", { prompt: "select_account", callbackUrl: "/" })} className="btn ">
                <FcGoogle className="text-xl" />
                Login With Google
              </button>
            </div>
            {/* <div className="form-control mt-6">
              <button onClick={() => signIn(undefined, { redirectTo: "/" })} className="btn ">
                <BiKey className="text-xl" />
                Login Credential
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
