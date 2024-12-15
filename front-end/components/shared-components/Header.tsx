import PineconeIcon from "../icons/PineconeIcon";
import { NavigationLinks } from "./header/NavigationLinks";
import { UserNav } from "./header/UserNav";
import { ShoppingBagDialog } from "./header/ShoppingBagDialog";
import { SearchFood } from "./header/SearchFood";
export default function Header() {
  return (
    <div className="container flex items-center justify-between px-6 py-2 sticky top-0 z-20 bg-white opacity-95 rounded-lg border-b">
      <div className="flex gap-6 items-center">
        <PineconeIcon fill="black" />
        <NavigationLinks />
      </div>
      <div className="flex items-center justify-between gap-2 *:px-2 *:py-1 *:flex *:gap-2">
        <SearchFood />
        <div className="flex items-center justify-between gap-2 *:px-2 *:py-1 *:flex *:gap-2">
          <ShoppingBagDialog />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
