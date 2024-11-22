import { FoodCategoryType } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";

export const AdminCategory = ({ category }: { category: FoodCategoryType }) => {
  return (
    <div className="w-full  py-2 px-4 rounded-lg flex justify-between border border-[#D6D8DB]">
      <p>{category.categoryName}</p>
      <EllipsisVertical />
    </div>
  );
};