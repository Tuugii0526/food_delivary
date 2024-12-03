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
export const ShoppingBagDialog = () => {
  const countFoods = useCart();
  return (
    <Sheet>
      <SheetTrigger className="user-nav">
        <div className="flex gap-4  ">
          <ShoppingBag />
          <p className="font-bold text-sm leading-5">Сагс</p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">Таны сагс</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ShoppingBagFoodCard />
      </SheetContent>
    </Sheet>
  );
};
