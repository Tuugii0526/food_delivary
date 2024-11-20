import { Login } from "@/components/login/Login";
import { SignUp } from "@/components/sign-up/SingUp";
import { UserIcon } from "lucide-react";
export const UserNav = () => {
  let signedIn=true
  return (
    <>
      {signedIn ? (
        <SignUp>
          <div>
            <UserIcon />
            <p className="font-bold text-sm leading-5">Хэрэглэгч</p>
          </div>
        </SignUp>
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
