"use client";

import { useFormStatus } from "react-dom";

export const ButtonRegister = () => {
  const { pending } = useFormStatus();
  return (
    <div className="form-control mt-6">
      <button className="btn btn-primary" disabled={pending}>
        {pending ? "Loading.." : "Register"}
      </button>
    </div>
  );
};

export const ButtonLogin = () => {
  const { pending } = useFormStatus();
  return (
    <div className="form-control mt-6">
      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Loading.." : "Login"}
      </button>
    </div>
  );
};
