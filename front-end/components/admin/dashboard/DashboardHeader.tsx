import { Search } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="h-fit py-5  flex justify-between">
      <p className="font-bold text-xl leading-7 text-[#121316]">
        Admin dashboard
      </p>

      <div className="flex gap-2 *:px-2 *:py-1 *:flex *:gap-2">
        <label
          htmlFor="search"
          className="max-w-[356px] border-2  rounded-[8px] border-gray-300"
        >
          <Search />
          <input
            id="search"
            type="text"
            placeholder="Хайх"
            className="outline-none"
          />
        </label>
      </div>
    </div>
  );
};
