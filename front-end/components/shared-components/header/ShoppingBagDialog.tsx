"use client";

import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/components/context/CartContext";
import { ShoppingBagFoodCard } from "./ShoppingBagFoodCard";
import { poppins } from "@/app/fonts/fonts";
import { cartTotalPriceCalculator } from "@/lib/utils";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
export const ShoppingBagDialog = () => {
  const countFoods = useCart();
  return (
    <Sheet>
      <SheetTrigger className="user-nav">
        <div className="flex gap-4 items-center">
          <div className="p-2 relative">
            <ShoppingBag />
            <p className="text-[#18BA51] top-0 right-0 absolute font-extrabold text-lg">
              {countFoods?.length}
            </p>
          </div>
          <p className="font-bold text-sm leading-5">Сагс</p>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll ">
        <div className="w-full h-full relative">
          <SheetHeader>
            <SheetTitle className="text-center">Таны сагс</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {countFoods?.length ? (
            countFoods?.map((countFood) => (
              <ShoppingBagFoodCard
                key={countFood.food._id}
                countFood={countFood}
              />
            ))
          ) : (
            <div className="p-4 w-full h-fit"> Cart is empty</div>
          )}
          <div className="sticky bottom-0 py-4 px-8 w-full flex justify-between items-center bg-white shadow-2xl rounded-md">
            <div className="flex  flex-col gap-1 w-1/2 ">
              <p className="text-[#5E6166] ">Нийт төлөх дүн</p>
              <p className={`text-[#121316] ${poppins.className}`}>
                {cartTotalPriceCalculator(countFoods)}₮
              </p>
            </div>
            <div className="w-1/2">
              <Link href={"/order"}>
                <DialogClose asChild>
                  <button
                    className={`w-full food-dialog-button  ${
                      !countFoods?.length && "cursor-not-allowed"
                    }`}
                  >
                    Захиалах
                  </button>
                </DialogClose>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
