import { foodCategories } from "@/lib/data-all/data";
import { poppins } from "../fonts/fonts";
import { AdminCategory } from "@/components/admin/admin-categories/AdminCategory";
import { Plus } from "lucide-react";
import { AdminAddCategory } from "@/components/admin/admin-categories/AdminAddCategory";
import { AdminAddFood } from "@/components/admin/admin-categories/AdminAddFood";

export default function Page() {
  return (
    <div className="container flex gap-5 h-fit">
      <div className="flex flex-col w-[258px]">
        <p
          className={`${poppins.className} text-[22px] leading-[33px] text-[#272727] mb-5`}
        >
          Food Menu
        </p>
        <div className="flex flex-col gap-[26px]">
          {foodCategories.map((category) => (
            <AdminCategory key={category.categoryId} category={category} />
          ))}
          <AdminAddCategory>
            <div className="w-full  py-2 px-4 rounded-lg flex gap-2 border border-[#D6D8DB] text-[#5E6166]">
              <Plus />
              <p>Create new category</p>
            </div>
          </AdminAddCategory>
        </div>
      </div>
      <div className="flex  flex-col p-6 gap-8 h-[1228px] grow ">
        <div className="flex justify-between">
          <p className="font-bold text-[24px]">Breakfast</p>
          <AdminAddFood>
            <button className="py-2 px-4 bg-[#18BA51] rounded-sm text-white">
              Add new food
            </button>
          </AdminAddFood>
        </div>
      </div>
    </div>
  );
}
