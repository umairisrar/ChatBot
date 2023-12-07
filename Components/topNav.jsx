import React from "react";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

const Topnav = () => {
  const { userId } = auth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700 w-[100%] fixed top-0">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg font-bold text-white uppercase">ChatBot</div>
        </Link>
      </div>
      <div className="flex items-center text-white">
        {!userId && <>No User</>}
        {userId && (
          <Link href="profile" className="text-gray-300 hover:text-white mr-4">
            Profile
          </Link>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
