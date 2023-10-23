"use client";

import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: object) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = await fetch("/api/auth/register", requestOptions);
    const json = await response.json();
    console.log(json);
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
      <select
        className="select select-primary w-full max-w-xs"
        {...register("role", { required: true })}
        defaultValue={"role"}
      >
        <option disabled value="role">
          Role
        </option>
        <option value="farmer">Farmer</option>
        <option value="headGrower">Head Grower</option>
        <option value="grower">Grower</option>
      </select>
      <input className="btn btn-primary w-full max-w-xs" type="submit" />
    </form>
  );
}
