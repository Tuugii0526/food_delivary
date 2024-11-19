"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { UserIcon } from "lucide-react";
import Link from "next/link";
export const UserNav = () => {
  const pathname = usePathname();
  return (
    <Link
      href={"/user"}
      className={clsx({
        "text-[#18BA51]": pathname === "/user",
      })}
    >
      <UserIcon />
      <p className="font-bold text-sm leading-5">Нэвтрэх</p>
    </Link>
  );
};
