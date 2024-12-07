"use client";

import { useBeAwareContext } from "../context/ContextProvider";
import { FoodCategories } from "./FoodCategories";
import { FoodsMenu } from "./FoodsMenu";
import { CategoryContextProvider } from "../context/CategoryContextProvider";

export const SubMenu = () => {
  const { categoryResponse } = useBeAwareContext();
  return (
    <div className="container flex flex-col">
      <CategoryContextProvider currentCategory={categoryResponse.categories[0]}>
        <FoodCategories categories={categoryResponse.categories} />
        <FoodsMenu />
      </CategoryContextProvider>
    </div>
  );
};
