"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function Navigation() {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-primary">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      {session ? (
        <button
          className="btn btn-secondary"
          onClick={() =>
            signOut({
              callbackUrl: "/login",
            })
          }
        >
          Sign Out
        </button>
      ) : (
        <a className="btn btn-secondary" href="/login">
          Sign In
        </a>
      )}
    </div>
  );
}
