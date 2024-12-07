import { poppins } from "@/app/fonts/fonts";
import { CountTypeForCart } from "@/lib/types";
import { discountPriceCalculator } from "@/lib/utils";
import Image from "next/image";

export const OrderFoodDisplay = ({
  countFood,
}: {
  countFood: CountTypeForCart;
}) => {
  return (
    <div className="py-4 w-full h-fit flex justify-between">
      <div className="h-[121px] w-[48%] relative">
        <Image
          src={countFood?.food.image}
          alt={countFood?.food.foodName}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="w-[48%] flex flex-col gap-2">
        <p className={`${poppins.className}`}>{countFood?.food?.foodName}</p>
        <div className="flex justify-between">
          <p className={`text-[#18BA51] ${poppins.className}`}>
            {discountPriceCalculator(countFood?.food)}₮
          </p>
          <p className={`${poppins.className}`}>x{countFood.howMany}</p>
        </div>
        <div className="flex flex-wrap w-full p-2 rounded-lg bg-[#F6F6F6]  ">
          {countFood?.food?.ingredient.map((ing) => (
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
