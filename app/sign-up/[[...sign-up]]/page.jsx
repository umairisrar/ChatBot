import Topnav from "@/Components/topNav";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-[100%] w-[100%]">
      {/* <Topnav /> */}

      <SignUp />
    </div>
  );
};
export default SignUpPage;
