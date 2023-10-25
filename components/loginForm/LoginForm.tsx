"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (data: { email?: string; password?: string }) => {
    const res = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    if (!res?.error) {
      router.push("/");
      router.refresh();
    } else {
      setError("user does not exist");
    }
  };
  return (
    <>
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
        <Link className="btn btn-link w-full max-w-xs" href="/register">
          Register
        </Link>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
