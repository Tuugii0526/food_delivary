import { inter } from "@/app/fonts/fonts";
import { FoodCategoryType } from "@/lib/types";
import clsx from "clsx";
import { useCurrentCategoryId } from "../context/CategoryContextProvider";
export const FoodCategory = ({ category }: { category: FoodCategoryType }) => {
  const { currentCategoryId, setCurrentCategoryId } = useCurrentCategoryId();
  return (
    <button
      className={clsx(
        "flex-shrink-0 w-[22%] rounded-[8px] border py-2 text-center",
        {
          "bg-green-500": currentCategoryId == category._id,
        }
      )}
      onClick={() => {
        setCurrentCategoryId(category._id);
      }}
    >
      <p className={`${inter.className} text-lg leading-7`}>
        {category.categoryName}
      </p>
    </button>
  );
};
