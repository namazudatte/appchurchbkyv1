"use client";

import React, { useState, startTransition } from "react";
import { pengajuanBaptis } from "@/app/lib/pengajuan/InputPengajuanBaptis";
import { SubmitPengajuanBaptis } from "./ButtonAction";

// import { useActionState } from "react";
// import { AlertSuccess } from "./Alert";

const FormPengajuanBaptis = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await pengajuanBaptis(null, formData);
      if (result?.error) {
        setErrorMessage("Pengajuan gagal! Periksa input Anda.");
        setIsSuccess(false);
      } else {
        setIsSuccess(true);
        setErrorMessage(null);

        form.reset();
      }
    });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content ">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl justify-center mx-24 mt-10 ">
          <p className="text-center mt-5 font-bold text-2xl">⭐⭐Formulir Pendaftaran Baptis⭐⭐</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-10" />
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fullname</span>
              </label>
              <input type="text" name="fullname" placeholder="Fullname" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Baptis</span>
              </label>
              <input type="text" name="nameBaptis" placeholder="Nama Baptis" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <select name="jenisKelamin" className="input input-bordered" required>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jenis Baptis</span>
              </label>
              <select name="jenisBaptis" className="input input-bordered" required>
                <option value="Dewasa">Dewasa</option>
                <option value="Bayi">Bayi</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Alamat</span>
              </label>
              <input type="text" name="alamat" placeholder="Alamat" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Ayah</span>
              </label>
              <input type="text" name="nameAyah" placeholder="Nama Ayah" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Ibu</span>
              </label>
              <input type="text" name="nameIbu" placeholder="Nama Ibu" className="input input-bordered" required />
            </div>
            <div className="mb-5 mt-1">
              <label className="label">
                <span className="label-text">Input Foto</span>
              </label>
              <input type="file" name="image" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
              <div aria-live="polite" aria-atomic="true">
                <p className="text-red-600 font-bold text-sm mt-2"></p>
              </div>
            </div>
            <SubmitPengajuanBaptis />
          </form>
          {isSuccess && (
            <div className="alert alert-success shadow-lg mt-4">
              <div>
                <span>🎉 Pengajuan berhasil dikirim!</span>
              </div>
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-error shadow-lg mt-4">
              <div>
                <span>❌ {errorMessage}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormPengajuanBaptis;
