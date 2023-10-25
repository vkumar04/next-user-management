"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  const { data: sessionData } = session;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {sessionData?.user?.name}
      {sessionData?.user?.role}
    </main>
  );
}
