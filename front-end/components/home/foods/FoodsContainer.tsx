import { foods } from "@/lib/data-all/data";
import { OneTypeFoods } from "./OneTypeFoods";
export const FoodsContainer = () => {
  const result: JSX.Element[] = [];
  let lastCategoryId: number = 0;
  const categoryFoods = [];
  for (let i = 0; i <= foods.length; i++) {
    if (lastCategoryId === (foods[i]?.categoryId  )) {
      categoryFoods.push(foods[i]);
    } else {
      if (categoryFoods.length) {
        const categoryName = categoryFoods[categoryFoods.length - 1].categoryName;
        result.push(
          <OneTypeFoods
            key={lastCategoryId}
            foods={[...categoryFoods]}
            categoryName={categoryName}
          />
        );
        categoryFoods.splice(0, categoryFoods.length ,foods[i]);
      }
    }
    lastCategoryId = foods[i]?.categoryId;
  }
  
  return <div className="container flex flex-col gap-20 mb-20">{result}</div>;
};
