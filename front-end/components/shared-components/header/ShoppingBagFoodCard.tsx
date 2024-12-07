import { CountTypeForCart } from "@/lib/types";

import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";
import { useCartDispatch } from "@/components/context/CartContext";
import { X } from "lucide-react";

export const ShoppingBagFoodCard = ({
  countFood,
}: {
  countFood: CountTypeForCart;
}) => {
  const dispatch = useCartDispatch();
  return (
    <div className="h-[182px] w-full p-4 flex justify-between">
      <div className="w-[49%] h-full bg-green-300 relative">
        <Image
          src={countFood.food.image}
          alt={countFood.food.foodName}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="w-[49%] h-full flex flex-col justify-between relative">
        <div className="flex justify-between">
          <p className={`${poppins.className}`}>{countFood.food.foodName}</p>
          <button
            className=""
            onClick={() => {
              dispatch({
                type: "DELETED",
                foodId: countFood.food._id,
              });
            }}
          >
            <X className="w-6 h-6 border border-white rounded-full hover:shadow-xl hover:border-[#18BA51] p-1" />
          </button>
        </div>
        <p className={`text-[#18BA51] ${poppins.className}`}>
          {countFood.howMuch}₮
        </p>
        <div className="flex flex-wrap w-full rounded-lg  ">
          {countFood.food.ingredient.map((ing) => (
            <p key={ing}>
              {ing}
              {","}
            </p>
          ))}
        </div>
        <div className="flex w-full justify-between items-center">
          <button
            className="minus-plus"
            onClick={() => {
              if (countFood.howMany - 1 < 1) {
                dispatch({
                  type: "DELETED",
                  foodId: countFood.food._id,
                });
              } else {
                dispatch({
                  type: "MINUSED",
                  foodId: countFood.food._id,
                });
              }
            }}
          >
            -
          </button>
          {countFood.howMany}
          <button
            className="minus-plus"
            onClick={() => {
              dispatch({
                type: "PLUSED",
                foodId: countFood.food._id,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
