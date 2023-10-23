"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: { email?: string; password?: string }) => {
    const res = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log({ res });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        className="input input-bordered input-primary w-full max-w-xs"
        type="text"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <input
        className="input input-bordered input-primary w-full max-w-xs"
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <button className="btn btn-primary w-full max-w-xs">Login</button>
    </form>
  );
}
