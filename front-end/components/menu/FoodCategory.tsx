import { inter } from "@/app/fonts/fonts";
import { FoodCategoryType } from "@/lib/types";
import clsx from "clsx";
import { useCurrentCategoryId } from "../context/CategoryContextProvider";
export const FoodCategory = ({ category }: { category: FoodCategoryType }) => {
  const { curCat, setCurCat } = useCurrentCategoryId();
  return (
    <button
      className={clsx(
        "flex-shrink-0 w-[22%] rounded-[8px] border py-2 text-center",
        {
          "bg-green-500": curCat._id == category._id,
        }
      )}
      onClick={() => {
        setCurCat(category);
      }}
    >
      <p className={`${inter.className} text-lg leading-7`}>
        {category.categoryName}
      </p>
    </button>
  );
};
