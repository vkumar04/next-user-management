"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: object) => {
    const res = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log({ res });
  };

  return (
    <div className="mx-auto max-w-md p-4 mt-10">
      <h1 className="text-2xl font-bold mb-10">User Login</h1>
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
        <input className="btn btn-primary w-full max-w-xs" type="submit" />
      </form>
    </div>
  );
}
