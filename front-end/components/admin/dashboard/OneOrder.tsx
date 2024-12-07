"use client";
import { Order } from "@/lib/types";
import { DashboardTableRow } from "./DashboardTableRow";
import React, { useState } from "react";
import { poppins } from "@/app/fonts/fonts";
import { moneyFormatter } from "@/lib/utils";

export const OneOrder = ({ order }: { order: Order }) => {
  const {
    _id,
    orderNumber,
    phoneNumber,
    userName,
    createdAt,
    isPaid,
    deliveryStatus,
    district,
    khoroo,
    apartment,
    addressDetail,
    totalPrice,
  } = order;
  const [pay, setPay] = useState<string>(isPaid);
  const [delivery, setDelivery] = useState<string>(deliveryStatus);
  const modifiedDate = new Date(createdAt).toLocaleString();
  return (
    <React.Fragment>
      {order.foodCounts.map((foodCount) => (
        <DashboardTableRow
          key={foodCount.foodId}
          _id={_id}
          foodCount={foodCount}
          userName={userName}
          phoneNumber={phoneNumber}
          orderNumber={orderNumber}
          createdAt={modifiedDate}
          pay={pay}
          setPay={setPay}
          delivery={delivery}
          setDelivery={setDelivery}
          district={district}
          khoroo={khoroo}
          apartment={apartment}
          addressDetail={addressDetail}
          totalPrice={totalPrice}
        />
      ))}
      <tr>
        <td className="flex gap-1">
          <p className="font-semibold">Net payment:</p>
          <p className={`${poppins.className}`}>
            {moneyFormatter(totalPrice)}₮
          </p>
        </td>
      </tr>
    </React.Fragment>
  );
};
