"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { UserRound } from "lucide-react"

const Dashboard = () => {

  const {data:session} = useSession();

  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-2xl grid place-items-center mx-auto py-40 gap-6 bg-slate-50">
        <span className="text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]">
          welcome to the Dashboard
        </span>
        {session && (
        <div className="flex items-center ">
          {session.user?.image ? (
            <Image src={session.user?.image} alt="profile" width={50} height={50} className="rounded-full mr-3" />
          ):(
            <UserRound color="grey" size={50} className="rounded-full mr-3" />
          )

          }
          
          <span className="text-2xl tracking-normal py-10 font-semibold">{session.user?.name} <span className="ml-3 text-xl tracking-normal py-10 text-slate-500 font-light">{session.user?.email}</span></span>
          
          </div>)
        }

        <button onClick={()=> signOut()} className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
