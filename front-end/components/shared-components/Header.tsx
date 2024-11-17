import { Search, ShoppingBag, UserIcon } from "lucide-react";
import PineconeIcon from "../icons/PineconeIcon";
const navs = [
  {
    id: 1,
    title: "нүүр",
  },
  {
    id: 2,
    title: "хоолны цэс",
  },
  {
    id: 3,
    title: "хүргэлтийн бүс",
  },
];
export default function Header() {
  return (
    <div className="container  flex items-center justify-between px-6 py-2">
      <div className="flex gap-6 items-center">
        <PineconeIcon />
        <div className="flex gap-2">
          {navs.map((nav) => (
            <div
              key={nav.id}
              className="py-2 px-4 font-bold text-sm leading-4 text-black uppercase"
            >
              {nav.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 *:px-2 *:py-1 *:flex *:gap-2">
        <label htmlFor="search" className="w-[260px] border-2 border-white rounded-[8px] has-[:focus]:border-gray-300">
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
        <div>
          <UserIcon />
          <p className="font-bold text-sm leading-5">Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
}
