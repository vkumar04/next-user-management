import RegisterForm from "@/components/registerForm/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="mx-auto max-w-md p-4 mt-10">
      <h1 className="text-2xl font-bold mb-10">Register User</h1>
      <RegisterForm />
    </div>
  );
}
