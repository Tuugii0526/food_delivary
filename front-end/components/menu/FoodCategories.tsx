import { foodCategories } from "@/lib/data-all/data";
import { FoodCategory } from "./FoodCategory";
export const FoodCategories = () => {
  return (
    <div className="w-full h-fit py-8 flex gap-[3%] overflowY-scroll">
      {foodCategories.map((foodCategory) => (
        <FoodCategory key={foodCategory.categoryId} category={foodCategory} />
      ))}
    </div>
  );
};
