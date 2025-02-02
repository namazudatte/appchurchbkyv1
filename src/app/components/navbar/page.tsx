"use client";

import Link from "next/link";
import SignButton from "../SignAction";
import { useSession } from "next-auth/react";
export default function NavbarComponet() {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-base-100 z-50 fixed top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-50">
            <li>
              <Link href="/berita">Berita</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
          {session?.user?.role === "user" ? (
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-50">
              <li>
                <Link href="/berita">Berita</Link>
              </li>
              <li>
                <a>Pengajuan</a>
                <ul className="p-2">
                  <li>
                    <Link href="/pendaftaran-baptis">Pengajuan Baptis</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/daftar-pengajuan">Daftar Pengajuan</Link>
              </li>
            </ul>
          ) : null}

          {session?.user?.role === "admin" ? (
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
              <li>
                <Link href="/berita">Berita</Link>
              </li>
              <li>
                <a>Dashboard</a>
                <ul className="p-2">
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/berita">Kelola Berita</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/pengajuan">Daftar Pengajuan</Link>
                  </li>
                </ul>
              </li>
            </ul>
          ) : null}
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <span className="text-2xl font-extrabold text-violet-400">
            Paroki<span className="text-lg text-black font-medium">Bengkayang</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/berita">Berita</Link>
          </li>

          {session?.user?.role === "user" ? (
            <>
              <li>
                <details>
                  <summary>Pengajuan</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/pendaftaran-baptis">Pendaftaran Baptis</Link>
                    </li>
                  </ul>
                </details>
              </li>
              {session && (
                <li>
                  <Link href="/daftar-pengajuan">Lihat Pengajuan Anda</Link>
                </li>
              )}
              {/* <li>
                <Link href="/kontak">Kontak</Link>
              </li> */}
            </>
          ) : null}

          {session?.user?.role === "admin" ? (
            <>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/pengajuan">Daftar Pengajuan</Link>
              </li>
            </>
          ) : null}
        </ul>
      </div>
      <div className="hidden lg:flex navbar-end ">
        <SignButton />
      </div>
    </div>
  );
}
