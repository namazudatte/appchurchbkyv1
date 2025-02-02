import { object, string } from "zod";

export const LoginScema = object({
  email: string().email("Invalid Email"),
  password: string().min(8, "Password Min 8 Karakter").max(16, "Maximal Password 16 Karakter"),
});

export const RegisterScema = object({
  name: string().min(3, "Minimal nama 3 karakter"),
  username: string().min(3, "Minimal username 3 karakter"),
  email: string().email("Invalid Email"),
  password: string().min(8, "Password Min 8 Karakter").max(16, "Maximal Password 16 Karakter"),
});
