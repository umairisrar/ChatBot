import Topnav from "@/Components/topNav";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-[100%] w-[100%]">
      {/* <Topnav /> */}
      <SignIn />
    </div>
  );
};
export default SignInPage;
