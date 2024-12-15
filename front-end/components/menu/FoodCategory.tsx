"use client";

import { inter } from "@/app/fonts/fonts";
import { FoodCategoryType } from "@/lib/types";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export const FoodCategory = ({ category }: { category: FoodCategoryType }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const categoryQuery = searchParams.get("categoryQuery");
  return (
    <button
      className={clsx(
        "flex-shrink-0 w-[22%] rounded-[8px] border py-2 text-center",
        {
          "bg-green-500": categoryQuery == category._id,
        }
      )}
      onClick={() => {
        const params = new URLSearchParams(searchParams);
        params.set("categoryQuery", category?._id);
        replace(`${pathname}?${params.toString()}`);
      }}
    >
      <p className={`${inter.className} text-lg leading-7`}>
        {category.categoryName}
      </p>
    </button>
  );
};
