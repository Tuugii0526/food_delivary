import { foodCategories } from "@/lib/data-all/mockData";
import { FoodCategory } from "./FoodCategory";
export const FoodCategories = () => {
  return (
    <div className="w-full h-fit py-8 flex gap-[3%] overflowY-scroll">
      {foodCategories.map((foodCategory) => (
        <FoodCategory key={foodCategory._id} category={foodCategory} />
      ))}
    </div>
  );
};
