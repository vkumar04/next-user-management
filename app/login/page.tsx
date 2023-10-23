import LoginForm from "@/components/loginForm/LoginForm";

export default function Login() {
  return (
    <div className="mx-auto max-w-md p-4 mt-10">
      <h1 className="text-2xl font-bold mb-10">User Login</h1>
      <LoginForm />
    </div>
  );
}
