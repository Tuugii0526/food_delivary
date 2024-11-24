import { poppins } from "../fonts/fonts";
import { Plus } from "lucide-react";
import { AdminAddCategory } from "@/components/admin/admin-categories/AdminAddCategory";
import { foods } from "@/lib/data-all/mockData";
import { AdminFoodCard } from "@/components/admin/admin-foods/AdminFoodCard";
import { AdminCategories } from "@/components/admin/admin-categories/AdminCategories";
import { FoodCreateDialog } from "@/components/admin/dialog/FoodCreateDialog";
export default async function Page() {
  return (
    <div className="container flex gap-10 h-fit">
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
      <div className="flex  flex-col p-6 gap-8 h-[1228px] grow ">
        <div className="flex justify-between">
          <p className="font-bold text-[24px]">Breakfast</p>
          <FoodCreateDialog>
            <button className="py-2 px-4 bg-[#18BA51] rounded-sm text-white">
              Add new food
            </button>
          </FoodCreateDialog>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-[60px] ">
          {foods.map((food) => (
            <AdminFoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
