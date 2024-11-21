import { Login } from "@/components/login/Login";
import { UserProfile } from "@/components/user/UserProfile";
import { UserIcon } from "lucide-react";
export const UserNav = () => {
  const signedIn = false;
  return (
    <>
      {signedIn ? (
        <UserProfile>
          <div>
            <UserIcon />
            <p className="font-bold text-sm leading-5">Хэрэглэгч</p>
          </div>
        </UserProfile>
      ) : (
        <Login>
          <div>
            <UserIcon />
            <p className="font-bold text-sm leading-5">Нэвтрэх</p>
          </div>
        </Login>
      )}
    </>
  );
};
