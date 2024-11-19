import { Login } from "@/components/login/Login";
import { UserIcon } from "lucide-react";
export const UserNav = () => {
  return (
    <Login>
      <div>
        <UserIcon />
        <p className="font-bold text-sm leading-5">Нэвтрэх</p>
      </div>
    </Login>
  );
};
