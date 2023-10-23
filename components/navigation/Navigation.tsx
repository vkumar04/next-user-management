"use client";

import { signOut } from "next-auth/react";
export default function Navigation() {
  return (
    <div className="navbar bg-primary">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
    </div>
  );
}
