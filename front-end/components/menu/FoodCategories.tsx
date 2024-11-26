import { FoodCategory } from "./FoodCategory";
import { FoodCategoryType } from "@/lib/types";
export const FoodCategories = ({
  categories,
}: {
  categories: FoodCategoryType[];
}) => {
  return (
    <div className="w-full h-fit py-8 flex gap-[3%] overflowY-scroll">
      {categories.map((foodCategory) => (
        <FoodCategory key={foodCategory._id} category={foodCategory} />
      ))}
    </div>
  );
};
