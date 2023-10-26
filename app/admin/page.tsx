import { authOptions } from "@/util/authOptions";
import { getServerSession } from "next-auth";

export default async function admin() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Admin Page</h1>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    </main>
  );
}
