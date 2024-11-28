"use client";

import { useCount } from "@/lib/customHooks";
import {
  Dialog,
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
  // const [count] = countPropsFunctions;
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className=" flex  gap-8 w-fit h-fit  p-8 ">
        <div className="w-[200px] h-[200px] relative">
          <Image src={food.image} alt={food.foodName} fill />
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
          <div className=" flex flex-col gap-[2px]">
            <p className={` ${poppins.className}`}>Тоо</p>
            <MinusPlus countPropsFunctions={countPropsFunctions} />
          </div>
          <button className="w-full food-dialog-button  ">Сагслах</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
