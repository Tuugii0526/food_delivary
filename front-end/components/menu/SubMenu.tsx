"use client";

import { useBeAwareContext } from "../context/ContextProvider";
import { FoodCategories } from "./FoodCategories";
import { FoodsMenu } from "./FoodsMenu";
import { CategoryContextProvider } from "../context/CategoryContextProvider";

export const SubMenu = () => {
  const { categories } = useBeAwareContext();
  return (
    <div className="container flex flex-col">
      <CategoryContextProvider currentCategory={categories[0]._id}>
        <FoodCategories categories={categories} />
        <FoodsMenu />
      </CategoryContextProvider>
    </div>
  );
};
