import { FoodCategory } from "./FoodCategory";
import { FoodCategoryType } from "@/lib/types";
export const FoodCategories = ({
  categories,
}: {
  categories: FoodCategoryType[];
}) => {
  return categories.length ? (
    <div className="w-full max-w-[1280px] h-fit py-8 flex gap-[3%] overflow-x-scroll">
      {categories.map((foodCategory) => (
        <FoodCategory key={foodCategory._id} category={foodCategory} />
      ))}
    </div>
  ) : (
    <p>No data</p>
  );
};
