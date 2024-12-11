"use client";
import { Order } from "@/lib/types";
import { useState } from "react";
import { HistoryOrder } from "./HistoryOrder";
import { OrderFoodCounts } from "./OrderFoodCounts";
import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";

export const SubOrderHistory = ({ orders }: { orders: Order[] }) => {
  const [chosenOrder, setChosenOrder] = useState<Order>(orders[0]);
  if (!orders.length) {
    return (
      <div className="w-full container">
        <div className=" w-[90%] max-h-[720px] h-fit m-auto my-10  flex flex-col ">
          <p className={`${poppins.className}`}>
            You don&#39;t have any order yet :D
          </p>
          <Link
            href={"/menu"}
            className={`${poppins.className} bg-green-500 rounded-sm p-1`}
          >
            Go to menu
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full container hover:cursor-pointer">
      <div className=" w-[90%] max-h-[720px] h-fit m-auto my-10  flex justify-between ">
        <div className="w-[40%] h-fullrounded-2xl p-6 flex flex-col overflow-y-scroll">
          <p className={`text-xl font-semibold`}>Захиалгын түүх</p>
          {orders.map((order) => (
            <HistoryOrder
              key={order._id}
              order={order}
              chosenOrder={chosenOrder}
              setChosenOrder={setChosenOrder}
            />
          ))}
        </div>
        <div className="w-[40%] h-full rounded-2xl p-6 ">
          <p className={`text-xl font-semibold`}>Захиалгын дэлгэрэнгүй</p>
          {chosenOrder.foodCounts.map((foodCount) => (
            <OrderFoodCounts key={foodCount.foodId} foodCount={foodCount} />
          ))}
        </div>
      </div>
    </div>
  );
};
