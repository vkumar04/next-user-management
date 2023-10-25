"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Navigation() {
  const { data: session } = useSession();
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            {session?.user.role === "Owner" && (
              <li>
                <Link href="/admin">Admin</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
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
