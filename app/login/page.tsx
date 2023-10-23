"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { userProfileInterface } from "@/types/user";

export default function Register() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit: SubmitHandler<userProfileInterface> = (data: object) =>
    console.log(data);

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
