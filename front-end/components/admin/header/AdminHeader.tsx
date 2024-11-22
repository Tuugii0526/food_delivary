import PineconeIcon from "@/components/icons/PineconeIcon";
import { UserNav } from "@/components/shared-components/header/UserNav";
import { Search } from "lucide-react";
import { AdminNavigationLinks } from "./AdminNavigationLinks";

export default function AdminHeader() {
  return (
    <div className="container flex items-center justify-between px-6 py-2">
      <div className="flex gap-6 items-center">
        <PineconeIcon fill="black" />
        <AdminNavigationLinks />
      </div>
      <div className="flex gap-2 *:px-2 *:py-1 *:flex *:gap-2">
        <label
          htmlFor="search"
          className="w-[260px] border-2 border-white rounded-[8px] has-[:focus]:border-gray-300"
        >
          <Search />
          <input
            id="search"
            type="text"
            placeholder="Хайх"
            className="outline-none"
          />
        </label>
        {/* <ShoppingBagDialog /> */}
        <UserNav />
      </div>
    </div>
  );
}
