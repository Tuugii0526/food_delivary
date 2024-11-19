import { FoodCategories } from "./FoodCategories";
import { FoodsMenu } from "./FoodsMenu";

export const SubMenu = () => {
  return (
    <div className="container flex flex-col">
      <FoodCategories />
      <FoodsMenu />
    </div>
  );
};
