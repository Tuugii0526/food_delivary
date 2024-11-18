import { checkCategoriesData } from "@/lib/data-all/data";
import { CheckCategory } from "./CheckCategoryCard";
export const CheckCategories = () => {
  return (
    <div className="container my-[100px]">
      <div className="w-full h-fit flex gap-[47px]">
        {checkCategoriesData.map((data) => (
          <CheckCategory key={data.id} checkCategory={data} />
        ))}
      </div>
    </div>
  );
};
