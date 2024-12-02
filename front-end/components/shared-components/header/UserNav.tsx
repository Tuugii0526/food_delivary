"use client";

import { useBeAwareContext } from "@/components/context/ContextProvider";
import { Login } from "@/components/login/Login";
import { UserProfile } from "@/components/user/UserProfile";
import { UserIcon } from "lucide-react";
export const UserNav = () => {
  const { user } = useBeAwareContext();
  return (
    <>
      {user.userId ? (
        <UserProfile user={user}>
          <div>
            <UserIcon />
            <p className="font-bold text-sm leading-5">
              {user.role === "ADMIN" ? "ADMIN" : "USER"}
            </p>
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
