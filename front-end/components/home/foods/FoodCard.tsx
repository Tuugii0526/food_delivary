import { poppins } from "@/app/fonts/fonts";
import { Food } from "@/lib/types";
import Image from "next/image";
import { DiscountPercent } from "./one-type-foods/DiscountPercent";
import { FoodCardDialog } from "./FoodCardDialog";

export const FoodCard = ({ food }: { food: Food }) => {
  let finalPrice;
  const prices: JSX.Element[] = [];
  if (food.discountPercent) {
    const discountPrice = Math.floor(
      ((100 - food.discountPercent) / 100) * food.initialPrice
    );
    finalPrice = discountPrice;
    prices.push(
      <p key={1} className={`${poppins.className} text-[#18BA51]`}>
        {discountPrice}₮
      </p>
    );
    prices.push(
      <p key={2} className="line-through">
        {food.initialPrice}₮
      </p>
    );
  } else {
    finalPrice = food?.initialPrice;
    prices.push(
      <p key={food.id} className={`${poppins.className} text-[#18BA51]`}>
        {food.initialPrice}₮
      </p>
    );
  }
  return (
    <FoodCardDialog food={food} finalPrice={finalPrice}>
      <div className="h-[256px] flex flex-col w-[24%] flex-shrink-0 relative justify-between border-b border-r border-t hover:shadow-[2px_3px_2px_0_#d1d5dbd7]  border-white hover:border-[#d1d5dbd7] rounded-sm">
        <div className="w-[90%] relative rounded-sm h-[70%]">
          {food.discountPercent > 0 && (
            <DiscountPercent discountPercent={food.discountPercent} />
          )}
          <Image src={food.image} alt="hero food" fill />
        </div>
        <div className="h-fit w-full flex flex-col gap-0.5">
          <p className={`${poppins.className} `}>{food.foodName}</p>
          <div className="flex gap-4">{prices}</div>
        </div>
      </div>
    </FoodCardDialog>
  );
};
