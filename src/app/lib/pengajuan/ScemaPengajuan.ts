import { object, string, z } from "zod";

export const ScemaInputPengajuanBaptis = object({
  fullname: string().min(3, "Fullname Min 3 Karakter"),
  nameBaptis: string().min(3, "Nama Baptis min 3 karaker"),
  jenisKelamin: string(),
  jenisBaptis: string(),
  alamat: string().min(5, "Alamat Min 5 Karakter"),
  nameAyah: string().min(3, "nama ayah min 3 karakter"),
  nameIbu: string().min(3, "nama Ibu min 3 karakter"),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 4000000, { message: "size image harus lebih kecil dari 4 MB" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), { message: "file hanya dapat image" })
    .refine((file) => file.size > 0, { message: "image wajib di isi" }),
});

// scema edit pengajuan baptis
export const EditScemaInputPengajuanBaptis = object({
  fullname: string().min(3, "Fullname Min 3 Karakter"),
  nameBaptis: string().min(3, "Nama Baptis min 3 karaker"),
  jenisKelamin: string(),
  jenisBaptis: string(),
  alamat: string().min(5, "Alamat Min 5 Karakter"),
  nameAyah: string().min(3, "nama ayah min 3 karakter"),
  nameIbu: string().min(3, "nama Ibu min 3 karakter"),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 4000000, { message: "size image harus lebih kecil dari 4 MB" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), { message: "file hanya dapat image" })
    .optional(),
});
