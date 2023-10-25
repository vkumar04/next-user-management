import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user?.name}
    </main>
  );
}
