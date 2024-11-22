"use client";

import { useState } from "react";
import { Food } from "@/lib/types";
import { AdminAddFood } from "../admin-categories/AdminAddFood";
import { DiscountPercent } from "@/components/home/foods/one-type-foods/DiscountPercent";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";

export const AdminFoodCard = ({ food }: { food: Food }) => {
  const [hover, setHover] = useState(false);
  const prices: JSX.Element[] = [];
  if (food.discountPercent) {
    const discountPrice = Math.floor(
      ((100 - food.discountPercent) / 100) * food.initialPrice
    );
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
    prices.push(
      <p key={food.id} className={`${poppins.className} text-[#18BA51]`}>
        {food.initialPrice}₮
      </p>
    );
  }
  return (
    <AdminAddFood food={food}>
      <div className="h-[256px] w-full ">
        <div
          className="h-full  flex flex-col w-full flex-shrink-0 relative justify-between border-b border-r border-t hover:shadow-[2px_3px_2px_0_#d1d5dbd7]  border-white hover:border-[#d1d5dbd7] rounded-sm"
          onPointerEnter={() => {
            setHover(true);
          }}
          onPointerLeave={() => {
            setHover(false);
          }}
        >
          <div className="w-full relative rounded-sm h-[70%]">
            {food.discountPercent > 0 && (
              <DiscountPercent discountPercent={food.discountPercent} />
            )}
            <Image src={food.image} alt={food.foodName} fill />
            <div
              className={`w-full h-full absolute inset-0 bg-black opacity-80 z-20 flex rounded-sm  justify-center items-center transition duration-200 ${
                hover ? "block" : "hidden"
              }`}
            >
              <button className=" py-2 px-4 rounded-lg bg-white ">
                <p className="text-black">Edit</p>
              </button>
            </div>
          </div>
          <div className="h-fit w-full flex flex-col gap-0.5">
            <p className={`${poppins.className} `}>{food.foodName}</p>
            <div className="flex gap-4">{prices}</div>
          </div>
        </div>
      </div>
    </AdminAddFood>
  );
};
