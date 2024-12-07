"use client";
import { CountTypeForCart } from "@/lib/types";
import { Paid } from "../is-paid-state/Paid";
import { NotPaid } from "../is-paid-state/NotPaid";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import { AdminOrderEdit } from "./AdminOrderEdit";
import { deliveryColor, orderColor } from "@/lib/data-all/mockData";
import { discountPriceCalculator, moneyFormatter } from "@/lib/utils";
import { useState } from "react";
export const DashboardTableRow = ({
  _id,
  foodCount,
  orderNumber,
  phoneNumber,
  userName,
  createdAt,
  pay,
  setPay,
  delivery,
  setDelivery,
  district,
  khoroo,
  apartment,
  addressDetail,
}: {
  _id: string;
  foodCount: CountTypeForCart;
  userName: string;
  orderNumber: number;
  phoneNumber: string;
  createdAt: string;
  pay: string;
  setPay: (value: string) => void;
  delivery: string;
  setDelivery: (value: string) => void;
  district: string;
  khoroo: string;
  apartment: string;
  addressDetail: string;
  totalPrice: number;
}) => {
  return (
    <tr
      className={`py-5 `}
      style={{
        backgroundColor: `${orderColor[orderNumber % 5]}`,
      }}
    >
      <td>
        <div className=" flex items-center gap-2 px-6 py-4">
          <div className="w-10 h-10 rounded-sm overflow-hidden relative">
            <Image
              src={foodCount?.food?.image || "./heroFood.png"}
              alt={`${foodCount?.food?.foodName}`}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="flex flex-col ">
            <p className="table-row-highlight-text">
              {"#"}
              {orderNumber}
            </p>
            <p className="table-row-no-highlight-text">
              {foodCount?.food?.foodName}
            </p>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col  px-6 py-4">
          <p className="table-row-highlight-text">{phoneNumber}</p>
          <p className="table-row-no-highlight-text">{userName}</p>
        </div>
      </td>

      <td>{moneyFormatter(discountPriceCalculator(foodCount?.food))}₮</td>
      <td className="font-bold">x{foodCount?.howMany}</td>

      <td>
        <div className="flex  items-center  gap-4  px-6 py-4">
          <div className="flex flex-col ">
            <p className="table-row-highlight-text">
              {moneyFormatter(foodCount?.howMuch)}₮
            </p>
            <p className="table-row-no-highlight-text">{`${createdAt}`}</p>
          </div>
          {pay === "PAID" ? <Paid /> : <NotPaid />}
        </div>
      </td>
      <td>
        <div className="w-[200px] flex flex-col *:text-xs">
          <div className="flex gap-1 items-center">
            <p>District:</p>
            <p className={"table-row-highlight-text"}>{district}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p>Khoroo:</p>
            <p className={"table-row-highlight-text"}>{khoroo}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p>Apartment:</p>
            <p className={"table-row-highlight-text"}>{apartment}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p>Address detail:</p>
            <p className={"table-row-highlight-text"}>{addressDetail}</p>
          </div>
        </div>
      </td>
      <td>
        <div
          className="h-fit w-fit px-2 py-1 rounded-2xl  "
          style={{
            backgroundColor: `${deliveryColor[delivery]}`,
          }}
        >
          {delivery}
        </div>
      </td>
      <td>
        <AdminOrderEdit
          pay={pay}
          setPay={setPay}
          delivery={delivery}
          setDelivery={setDelivery}
          _id={_id}
        >
          <EllipsisVertical className=" text-[#5E6166]" />
        </AdminOrderEdit>
      </td>
    </tr>
  );
};
