import { foods } from "@/lib/data-all/mockData";
import { AdminFoodCard } from "../admin-foods/AdminFoodCard";
import { FoodCreateDialog } from "../dialog/FoodCreateDialog";
import { useEffect, useState } from "react";
import { useCurrentCategoryId } from "@/components/context/CategoryContextProvider";
import { Food } from "@/lib/types";

export const SecondColumn = () => {
  const { curCat } = useCurrentCategoryId();
  const [categoryFoods, setCategoryFoods] = useState<Food[]>([]);
  const currentCategoryId = curCat._id;
  useEffect(() => {
    async function fetchCategoryFoods() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/food?categoryQuery=${currentCategoryId}`
      );
      const data = await res.json();
      setCategoryFoods(data.data);
    }
    fetchCategoryFoods();
  }, [currentCategoryId]);
  return (
    <div className="flex  flex-col p-6 gap-8 h-[1228px] grow ">
      <div className="flex justify-between">
        <p className="font-bold text-[24px]">{curCat.categoryName}</p>
        <FoodCreateDialog>
          <button className="py-2 px-4 bg-[#18BA51] rounded-sm text-white">
            Add new food
          </button>
        </FoodCreateDialog>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-[60px] ">
        {categoryFoods.map((food) => (
          <AdminFoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};
