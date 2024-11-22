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
export function AdminAddFood({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [checked, setChecked] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
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
    imageInputRef.current?.addEventListener("change", previewImage);
    return () => {
      imageInputRef.current?.removeEventListener("change", previewImage);
    };
  }, []);
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex justify-center">
        <form className="flex flex-col p-6 gap-4 rounded-2xl w-[448px] min-h-[600px] h-fit">
          <DialogHeader>
            <DialogTitle className="font-bold text-[24px] text-center">
              Create Food
            </DialogTitle>
          </DialogHeader>
          <label htmlFor="foodName" className="flex flex-col gap-2 relative">
            <p>Хоолны нэр</p>
            <input
              type="text"
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
              type="text"
              id="foodIngredient"
              placeholder="Хоолны орц оруулна уу"
              className="login-input"
            />
          </label>

          <label htmlFor="foodPrice" className="flex flex-col gap-2 relative">
            <p>Хоолны үнэ</p>
            <input
              type="text"
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
              className={clsx(`login-input sale-hidden `, {
                "sale-block": checked,
              })}
              placeholder="Хямдралын үнээ оруулна уу"
            />
          </label>
          <label htmlFor="foodImage" className="flex flex-col gap-2 relative">
            <p>Хоолны зураг</p>
            <div className="w-[284px] h-[122px] flex justify-center items-center  bg-[#BABCC41F] rounded-lg relative">
              <img
                src={undefined}
                alt="image will inserted here"
                ref={imageRef}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
              <div className="py-2 px-4 rounded-sm bg-[#393939] text-white relative h-fit w-fit cursor-pointer">
                <p>Add image</p>
                <input
                  type="file"
                  accept="image/*"
                  id="foodImage"
                  placeholder="Хоолны үнэ оруулна уу"
                  className="login-input invisible absolute inset-0"
                  ref={imageInputRef}
                />
              </div>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
