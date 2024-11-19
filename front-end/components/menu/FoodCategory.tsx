import { inter } from "@/app/fonts/fonts";
import { FoodCategoryType } from "@/lib/types";
export const FoodCategory = ({ category }: { category: FoodCategoryType }) => {
  return (
    <div className="flex-shrink-0 w-[22%] rounded-[8px] border py-2 text-center">
      <p className={`${inter.className} text-lg leading-7`}>
        {category.categoryName}
      </p>
    </div>
  );
};
