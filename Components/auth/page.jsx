import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Auth = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <div className="flex items-center flex-row gap-[10px]">
        <Link href="sign-in">
          <button className="text-[white] text-[21px] border-[1px] border-[white] rounded-[5px] p-[6px] bg-[#1d4ed8] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Sign In
          </button>
        </Link>
        <UserButton afterSignOutUrl="/" />

        <Link href="/auth/signup">
          <button className="text-[white] text-[21px] border-[1px] border-[white] rounded-[5px] p-[6px] bg-[#1d4ed8] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Auth;
