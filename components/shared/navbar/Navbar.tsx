"use client";

import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Theme from "./Theme";

const Navbar = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  return (
    <div className="flex  background-light900_dark200  w-full max-w-hd  justify-between items-center fixed  p-4 shadow-md ">
      <Link href="/" className="font-bold text-lg text-blue-700">
        Next-User-Auth
      </Link>

      <Theme />

      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => router.push("/")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Signin
        </button>
      )}
    </div>
  );
};

export default Navbar;
