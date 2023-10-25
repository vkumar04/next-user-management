"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  const { data: sessionData } = session;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p>{`Hello ${sessionData?.user?.name}! you are a ${sessionData?.user?.role}`}</p>
    </main>
  );
}
