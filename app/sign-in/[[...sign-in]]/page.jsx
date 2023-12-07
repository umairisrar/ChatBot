import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center h-[100%] w-[100%]">
      <SignIn />
    </div>
  );
};
export default SignInPage;
