import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div className="flex h-[100%] w-[100%] justify-center items-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
