import { FoodCategoryType } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { AdminCategoryEdit } from "./AdminCategoryEdit";
import { useCurrentCategoryId } from "@/components/context/CategoryContextProvider";
import clsx from "clsx";

export const AdminCategory = ({ category }: { category: FoodCategoryType }) => {
  const { curCat, setCurCat } = useCurrentCategoryId();
  return (
    <div
      className={clsx(
        "w-full  py-2 px-4 rounded-lg flex justify-between border border-[#D6D8DB]",
        {
          "bg-green-500": curCat._id == category._id,
        }
      )}
      onClick={() => {
        setCurCat(category);
      }}
    >
      <p>{category.categoryName}</p>
      <AdminCategoryEdit>
        <EllipsisVertical />
      </AdminCategoryEdit>
    </div>
  );
};
