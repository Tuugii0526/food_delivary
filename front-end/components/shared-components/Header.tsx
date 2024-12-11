import { Search } from "lucide-react";
import PineconeIcon from "../icons/PineconeIcon";
import { NavigationLinks } from "./header/NavigationLinks";
import { UserNav } from "./header/UserNav";
import { ShoppingBagDialog } from "./header/ShoppingBagDialog";
export default function Header() {
  return (
    <div className="container flex items-center justify-between px-6 py-2 sticky top-0 z-20 bg-white opacity-95 rounded-lg border-b">
      <div className="flex gap-6 items-center">
        <PineconeIcon fill="black" />
        <NavigationLinks />
      </div>
      <div className="flex items-center justify-between gap-2 *:px-2 *:py-1 *:flex *:gap-2">
        <label
          htmlFor="search"
          className="w-[40%] right-10 max-w-[260px] border-2 p-2  rounded-[8px] has-[:focus]:ring-2 has-[:focus]:ring-offset-2 has-[:focus]:w-[50%] transition-all relative"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <input
            id="search"
            type="text"
            placeholder="Хайх"
            className="outline-none overflow-x-scroll w-full"
          />
        </label>
        <div className="flex items-center justify-between gap-2 *:px-2 *:py-1 *:flex *:gap-2">
          <ShoppingBagDialog />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
