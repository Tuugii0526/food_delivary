import { poppins } from "@/app/fonts/fonts";
import { AdminCategories } from "../admin-categories/AdminCategories";
import { AdminAddCategory } from "../admin-categories/AdminAddCategory";
import { Plus } from "lucide-react";
import { useCurrentCategoryId } from "@/components/context/CategoryContextProvider";

export const FirstColumn = () => {
  return (
    <div className="flex flex-col w-[258px]">
      <p
        className={`${poppins.className} text-[22px] leading-[33px] text-[#272727] mb-5`}
      >
        Food Menu
      </p>
      <div className="flex flex-col max-h-[500px] overflow-y-scroll gap-[26px] pr-4 relative">
        <AdminCategories />
        <AdminAddCategory>
          <div className="w-full  py-2 px-4 rounded-lg flex gap-2 border border-[#D6D8DB] text-[#5E6166]">
            <Plus />
            <p>Create new category</p>
          </div>
        </AdminAddCategory>
      </div>
    </div>
  );
};
