"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import clsx from "clsx";
import { Food } from "@/lib/types";
import { useInput } from "@/lib/customHooks";
export function FoodEditDialog({
  children,
  food,
}: Readonly<{
  children: React.ReactNode;
  food?: Food;
}>) {
  if (!food) {
    return;
  }
  const nameProps = useInput(food.foodName);
  const categoryProps = useInput(food.categoryName);
  const ingredientProps = useInput(food.ingredient.join(","));
  const priceProps = useInput(`${food.initialPrice}`);
  const discountProps = useInput(`${food.discountPercent}`);
  const [checked, setChecked] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const theImageInputCurrentRef = imageInputRef;
    function previewImage(event: Event) {
      const targetInput = event.target as HTMLInputElement;
      if (targetInput) {
        if (targetInput.files) {
          const file = targetInput.files[0];
          const reader = new FileReader();
          reader.onload = function (e) {
            if (e.target) {
              if (imageRef.current) {
                imageRef.current.src = e.target.result as string;
              }
            }
          };
          reader.readAsDataURL(file);
        }
      }
    }
    theImageInputCurrentRef.current?.addEventListener("change", previewImage);
    return () => {
      theImageInputCurrentRef.current?.removeEventListener(
        "change",
        previewImage
      );
    };
  }, []);
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="h-fit w-fit">
        <form className="flex  gap-4 rounded-2xl w-fit h-fit">
          <div className="flex flex-col gap-4">
            <DialogHeader>
              <DialogTitle className="font-bold text-[24px] text-center">
                Edit Food
              </DialogTitle>
            </DialogHeader>
            <label htmlFor="foodName" className="flex flex-col gap-2 relative">
              <p>Хоолны нэр</p>
              <input
                type="text"
                {...nameProps}
                id="foodName"
                placeholder="Хоолны нэр оруулна уу"
                className="login-input"
              />
            </label>
            <label
              htmlFor="foodCategory"
              className="flex flex-col gap-2 relative"
            >
              <p>Хоолны төрөл</p>
              <input
                type="text"
                {...categoryProps}
                id="foodCategory"
                placeholder="Хоолны төрөл оруулна уу"
                className="login-input"
              />
            </label>
            <label
              htmlFor="foodIngredient"
              className="flex flex-col gap-2 relative"
            >
              <p>Хоолны орц</p>
              <input
                {...ingredientProps}
                type="text"
                id="foodIngredient"
                placeholder="Хоолны орц оруулна уу"
                className="login-input"
              />
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="foodPrice"
              className="flex flex-col gap-2 items-start"
            >
              <p>Хоолны үнэ</p>
              <input
                type="text"
                {...priceProps}
                id="foodPrice"
                placeholder="Хоолны үнэ оруулна уу"
                className="login-input"
              />
            </label>
            <label htmlFor="sale" className="flex flex-col gap-2  items-start ">
              <div className="flex gap-2 items-center">
                <Switch
                  checked={checked}
                  onCheckedChange={() => {
                    setChecked((pre) => !pre);
                  }}
                />
                <p>Хямдралтай эсэх</p>
              </div>
              <input
                id="sale"
                type="text"
                {...discountProps}
                className={clsx(`login-input sale-hidden `, {
                  "sale-block": checked,
                })}
                placeholder="Хямдралын хувиа оруулна уу"
              />
            </label>
            <label
              htmlFor="foodImage"
              className="flex flex-col gap-2 relative items-start"
            >
              <div className="flex  gap-4 relative">
                <p>Хоолны зураг</p>
                <div className="px-1 rounded-sm bg-[#393939] text-white relative h-fit w-fit cursor-pointer">
                  <p>Add image</p>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    id="foodImage"
                    placeholder="Хоолны үнэ оруулна уу"
                    className="login-input invisible absolute inset-0"
                  />
                </div>
              </div>
              <div className="h-[230px] w-[230px] flex justify-center items-center  bg-[#BABCC41F] rounded-lg relative">
                <img
                  src={food?.image}
                  alt="image will inserted here"
                  ref={imageRef}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                />
              </div>
            </label>
            <fieldset className="flex justify-end gap-4">
              <DialogClose asChild>
                <button className="py-[10px] px-2 rounded-sm font-bold text-base leading-5 text-[#3F4145] align-middle">
                  Clear
                </button>
              </DialogClose>
              <button className="px-4 py-[10px] bg-[#393939] text-white font-bold rounded-sm">
                Continue
              </button>
            </fieldset>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
