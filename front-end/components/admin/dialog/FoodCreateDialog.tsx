"use client";

import { useState, ChangeEvent } from "react";
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
import { useBeAwareContext } from "@/components/context/ContextProvider";
import Image from "next/image";
export function FoodCreateDialog({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { categories } = useBeAwareContext();
  const [checked, setChecked] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger
        className="user-nav"
        asChild
        onClick={() => {
          setPreviewImage("");
        }}
      >
        {children}
      </DialogTrigger>
      <DialogContent className="h-fit w-fit">
        <form
          className="flex  gap-4 rounded-2xl w-fit h-fit"
          action={`${process.env.NEXT_PUBLIC_DATABASE_URL}/food`}
          method="post"
          encType="multipart/form-data"
          target="_self"
        >
          <div className="flex flex-col gap-4">
            <DialogHeader>
              <DialogTitle className="font-bold text-[24px] text-center">
                Create Food
              </DialogTitle>
            </DialogHeader>
            <label htmlFor="foodName" className="flex flex-col gap-2 relative">
              <p>Хоолны нэр</p>
              <input
                type="text"
                name="foodName"
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
              <select
                name="foodCategory"
                id="foodCategory"
                className="login-input"
              >
                {categories.length ? (
                  categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.categoryName}
                    </option>
                  ))
                ) : (
                  <option>No data</option>
                )}
              </select>
            </label>
            <label
              htmlFor="foodIngredient"
              className="flex flex-col gap-2 relative"
            >
              <p>Хоолны орц</p>
              <input
                type="text"
                name="foodIngredient"
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
                name="foodPrice"
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
                name="sale"
                className={clsx(`login-input sale-hidden `, {
                  "sale-block": checked,
                })}
                placeholder="Хямдралын хувиа оруулна уу"
              />
            </label>
            <div className="flex flex-col gap-2 relative items-start">
              <div className="flex  gap-4 relative">
                <p>Хоолны зураг</p>
                <label
                  className="px-1 rounded-sm bg-[#393939] text-white h-fit w-fit cursor-pointer"
                  htmlFor="foodImage"
                >
                  <p>Add image</p>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    id="foodImage"
                    placeholder="Хоолны үнэ оруулна уу"
                    className="login-input invisible absolute inset-0"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      if (e?.target?.files?.[0]) {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setPreviewImage(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>
              <div className="h-[230px] w-[230px] flex justify-center items-center  bg-[#BABCC41F] rounded-lg relative">
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="image"
                    fill
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </div>
            <fieldset className="flex justify-end gap-4">
              <DialogClose asChild>
                <button className="py-[10px] px-2 rounded-sm font-bold text-base leading-5 text-[#3F4145] align-middle">
                  Clear
                </button>
              </DialogClose>
              <button
                className="px-4 py-[10px] bg-[#393939] text-white font-bold rounded-sm"
                type="submit"
              >
                Continue
              </button>
            </fieldset>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
