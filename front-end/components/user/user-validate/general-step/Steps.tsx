"use client";

import { useCheckFormInputs } from "@/lib/customHooks";
import { Step1 } from "../step-1/Step1";
import { Step2 } from "../step-2/Step2";
import { ChangeEvent, useState } from "react";
import { cartTotalPriceCalculator, getToken } from "@/lib/utils";
import { useCart, useCartDispatch } from "@/components/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export const Steps = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const cart = useCart();
  const dispatch = useCartDispatch();
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("cart", JSON.stringify(cart));
    const totalPrice = cartTotalPriceCalculator(cart);
    formData.append("totalPrice", String(totalPrice));
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/order`, {
        method: "post",
        headers: {
          Authorization: `${getToken()}`,
        },
        body: formData,
      });
      setLoading(false);
      if (res.ok) {
        toast("You have successfully ordered food");
        router.push("/");
        dispatch({ type: "DELETE_ALL" });
      } else {
        if (res.status == 401) {
          toast(`Please log in`);
        } else {
          const data = await res.json();
          toast(`Not successful:${data.error}`);
        }
      }
    } catch (error) {
      console.log("error inside steps:", error);
    }
  };
  const { correct, onChange } = useCheckFormInputs();
  const [step1Validated, setStep1Validated] = useState(false);
  const [byCach, setByCach] = useState<boolean>(false);
  const [byCard, setByCard] = useState<boolean>(false);
  const addressInfoInserted = correct && (byCach || byCard);
  if (step1Validated != addressInfoInserted) {
    setStep1Validated(addressInfoInserted);
  }
  return (
    <form
      className="w-fit h-[800px] flex  justify-between m-auto mb-10 "
      onChange={onChange}
      onSubmit={handleSubmit}
    >
      <Step1
        step1Validated={step1Validated}
        setByCach={setByCach}
        setByCard={setByCard}
      />
      <Step2 step1Validated={step1Validated} loading={loading} />
    </form>
  );
};
