import { Search, ShoppingBag } from "lucide-react";
import PineconeIcon from "../icons/PineconeIcon";
import { NavigationLinks } from "./header/NavigationLinks";
import { UserNav } from "./header/UserNav";
export default function Header() {
  return (
    <div className="container flex items-center justify-between px-6 py-2">
      <div className="flex gap-6 items-center">
        <PineconeIcon fill="black" />
        <NavigationLinks />
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
        <div>
          <ShoppingBag />
          <p className="font-bold text-sm leading-5">Сагс</p>
        </div>

        <UserNav />
      </div>
    </div>
  );
}
