import { poppins } from "@/app/fonts/fonts";
import { Food } from "@/lib/types";

export const OrderFoodDisplay = ({ food }: { food: Food }) => {
  return (
    <div className="py-4 w-full h-fit flex gap-[10%]">
      <div className="h-[121px] w-[40%] bg-yellow-50"></div>
      <div className="flex flex-col gap-2">
        <p className={`${poppins.className}`}>{food?.foodName}</p>
        <p className={`text-[#18BA51] ${poppins.className}`}>
          {food.initialPrice}
        </p>
        <div className="flex flex-wrap w-full p-2 rounded-lg bg-[#F6F6F6] ">
          {food?.ingredient.map((ing) => (
            <p key={ing}>
              {ing}
              {","}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
