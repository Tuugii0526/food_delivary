import { foods } from "@/lib/data-all/data";
import { OneTypeFoods } from "../home/foods/OneTypeFoods";
import { Food } from "@/lib/types";
export const FoodsMenu = () => {
  const result: JSX.Element[] = [];
  const temporaryContainer: Food[] = [];
  let key = 0;
  foods.forEach((food) => {
    if (temporaryContainer.length < 4) {
      temporaryContainer.push(food);
    } else {
      result.push(<OneTypeFoods key={key} foods={[...temporaryContainer]} />);
      temporaryContainer.splice(0, temporaryContainer.length);
      temporaryContainer.push(food);
    }
    key++;
  });
  if (temporaryContainer.length !== 0) {
    result.push(<OneTypeFoods key={key} foods={[...temporaryContainer]} />);
  }
  return <div className="my-20 w-full flex flex-col gap-20">{result}</div>;
};
