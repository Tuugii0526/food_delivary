import { useEffect, useState } from "react";
import { OneTypeFoods } from "../home/foods/OneTypeFoods";
import { Food } from "@/lib/types";
import { useSearchParams } from "next/navigation";
export const FoodsMenu = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const categoryQuery = searchParams.get("categoryQuery");
  const [categoryFoods, setCategoryFoods] = useState<Food[]>([]);
  useEffect(() => {
    async function fetchCategoryFoods() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DATABASE_URL}/food?categoryQuery=${categoryQuery}&searchQuery=${query}`
      );
      const data = await res.json();
      setCategoryFoods(data.data);
    }
    fetchCategoryFoods();
  }, [categoryQuery, query]);
  const result: JSX.Element[] = [];
  const temporaryContainer: Food[] = [];
  let key = 0;
  if (categoryFoods?.length > 0) {
    categoryFoods.forEach((food) => {
      if (temporaryContainer.length < 4) {
        temporaryContainer.push(food);
      } else {
        result.push(<OneTypeFoods key={key} foods={[...temporaryContainer]} />);
        temporaryContainer.splice(0, temporaryContainer.length);
        temporaryContainer.push(food);
      }
      key++;
    });
    if (temporaryContainer?.length !== 0) {
      result.push(<OneTypeFoods key={key} foods={[...temporaryContainer]} />);
    }
  }
  return <div className="my-20 w-full flex flex-col gap-20">{result}</div>;
};
