import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import Chat from "@/Components/Chat/page";
import Auth from "@/Components/auth/page";

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <div className="w-[100%]">
      {userId ? (
        <div className="h-[100%] w-[100%] flex justify-center items-center">
          <div className="flex items-center flex-row gap-[10px]">
            {/* <Link href="profile">
              <button className="text-[white] text-[21px] border-[1px] border-[white] rounded-[5px] p-[6px] bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Profile
              </button>
            </Link> */}
            <Link href="chatbot">
              <button className="text-[white] text-[21px] border-[1px] border-[white] rounded-[5px] p-[6px] bg-[#1d4ed8] hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Chatbot
              </button>
            </Link>
            {/* <div className="ml-auto">
              <UserButton afterSignOutUrl="/" />
            </div> */}
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default Header;
