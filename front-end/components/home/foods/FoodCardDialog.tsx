"use client";

import { useCount } from "@/lib/customHooks";
import {
  Dialog,
  DialogClose,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Food } from "@/lib/types";
import { poppins } from "@/app/fonts/fonts";
import { MinusPlus } from "./food-card-dialog/MinusPlus";
import Image from "next/image";
import { useCart, useCartDispatch } from "@/components/context/CartContext";
import { discountPriceCalculator } from "@/lib/utils";
export function FoodCardDialog({
  children,
  food,
  finalPrice,
}: {
  children: React.ReactNode;
  food: Food;
  finalPrice: number;
}) {
  const countPropsFunctions = useCount();
  const [count] = countPropsFunctions;
  const cart = useCart();
  const isCarted = cart?.some((countFood) => countFood.food._id == food._id);
  const dispatch = useCartDispatch();
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className=" flex  gap-8 w-fit h-fit  p-8 ">
        <div className="w-[200px] h-[200px] relative">
          <Image
            src={food.image}
            alt={food.foodName}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="flex flex-col min-w-[200px] gap-8 ">
          <DialogHeader className="flex flex-col gap-[2px]">
            <DialogTitle className={`${poppins.className}`}>
              {food.foodName}
            </DialogTitle>
            <p className={`text-[#18BA51] ${poppins.className}`}>
              {finalPrice}₮
            </p>
          </DialogHeader>
          <div className=" flex flex-col gap-[2px]">
            <p className={`${poppins.className}`}>Орц</p>
            <div className="flex flex-wrap w-full p-2 rounded-lg bg-[#F6F6F6] ">
              {food?.ingredient.map((ing) => (
                <p key={ing}>
                  {ing}
                  {","}
                </p>
              ))}
            </div>
          </div>
          {!isCarted && (
            <div className=" flex flex-col gap-[2px]">
              <p className={` ${poppins.className}`}>Тоо</p>
              <MinusPlus countPropsFunctions={countPropsFunctions} />
            </div>
          )}
          {isCarted ? (
            <DialogClose asChild>
              <button
                className="w-full food-dialog-button  "
                onClick={() => {
                  dispatch({
                    type: "DELETED",
                    foodId: food._id,
                  });
                }}
              >
                Сагснаас хасах
              </button>
            </DialogClose>
          ) : (
            <DialogClose asChild>
              <button
                className="w-full food-dialog-button  "
                onClick={() => {
                  dispatch({
                    type: "INSERTED",
                    insertedFoodCount: {
                      foodId: food._id,
                      howMany: count,
                      howMuch: discountPriceCalculator(food) * count,
                      food: food,
                    },
                  });
                }}
              >
                Сагслах
              </button>
            </DialogClose>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
