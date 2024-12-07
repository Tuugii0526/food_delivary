"use client";
import { OrderFoodDisplay } from "../../OrderFoodDisplay";
import { Step2Check } from "./Step2Check";
import { useCart } from "@/components/context/CartContext";
import { poppins } from "@/app/fonts/fonts";
import { cartTotalPriceCalculator } from "@/lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export const Step2 = ({
  step1Validated,
  loading,
}: {
  step1Validated: boolean;
  loading: boolean;
}) => {
  const router = useRouter();
  const cart = useCart();
  useEffect(() => {
    if (!cart?.length) {
      router.push("/");
    }
  }, [cart]);
  return (
    <div className="flex w-[49%] h-full flex-col gap-4  rounded-2xl shadow-xl">
      <Step2Check />
      <div className="flex flex-col gap-[40px] p-6  overflow-y-scroll">
        {cart?.map((countFood) => (
          <OrderFoodDisplay key={countFood?.food._id} countFood={countFood} />
        ))}
      </div>
      <div className="sticky bottom-0 py-4 px-8 w-full flex justify-between items-center bg-white shadow-2xl rounded-md">
        <div className="flex  flex-col gap-1 w-1/2 ">
          <p className="text-[#5E6166] ">Нийт төлөх дүн</p>
          <p className={`text-[#121316] ${poppins.className}`}>
            {cartTotalPriceCalculator(cart)}₮
          </p>
        </div>
        <div className={`w-1/2  `}>
          {!step1Validated ? (
            <button
              className={`w-full food-dialog-button cursor-not-allowed opacity-50`}
              type="button"
            >
              Захиалах
            </button>
          ) : (
            <button
              className={`w-full food-dialog-button ${
                loading ? "cursor-not-allowed " : ""
              }`}
              type="submit"
            >
              {loading ? "Уншиж байна" : "Захиалах"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
