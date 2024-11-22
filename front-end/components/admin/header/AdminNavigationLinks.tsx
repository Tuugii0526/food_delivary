"use client";

import { adminNavs } from "@/lib/data-all/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const AdminNavigationLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-around">
      {adminNavs.map((nav) => (
        <Link
          key={nav.id}
          href={nav.link}
          className={clsx("py-2 px-4 font-bold text-sm leading-4 uppercase", {
            "text-[#18BA51]": nav.link == pathname,
          })}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};
