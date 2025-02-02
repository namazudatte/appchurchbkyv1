"use server";
import { LoginScema, RegisterScema } from "@/app/lib/authAction/zod";
import { prisma } from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";
import { signIn } from "next-auth/react";

export const RegisterCredential = async (prevState: unknown, formData: FormData) => {
  const validasiFilds = RegisterScema.safeParse(Object.fromEntries(formData.entries()));

  if (!validasiFilds.success) {
    return {
      error: validasiFilds.error.flatten().fieldErrors,
    };
  }

  const { name, username, email, password } = validasiFilds.data;

  const hashPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashPassword,
      },
    });
  } catch (error) {
    return console.log(`error create user: ${error}`);
  }
  redirect("/login");
};

// login
export const LoginCredential = async (prevState: unknown, formData: FormData) => {
  const validasiFilds = LoginScema.safeParse(Object.fromEntries(formData.entries()));

  if (!validasiFilds.success) {
    return {
      error: validasiFilds.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validasiFilds.data;

  try {
    await signIn("credentials", { email, password, callbackUrl: "/" });
  } catch (error) {
    console.error("Login Error:", error);
  }
};
