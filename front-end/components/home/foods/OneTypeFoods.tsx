import { Food } from "@/lib/types";
import { Top } from "./one-type-foods/Top";
import { FoodCard } from "./FoodCard";

export const OneTypeFoods = ({
  foods,
  categoryName,
}: {
  foods: Food[];
  categoryName?: string;
}) => {
  return (
    <div className="flex flex-col justify-around">
      {typeof categoryName !== "undefined" && (
        <Top categoryName={categoryName} />
      )}
      <div className="w-full h-fit flex gap-6 overflow-hidden">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};
