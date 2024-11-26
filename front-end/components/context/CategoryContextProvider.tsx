"use client";

import { FoodCategoryType } from "@/lib/types";
import React, { useContext, createContext, useState, useMemo } from "react";
type CategoryContextType = {
  curCat: FoodCategoryType;
  setCurCat: (value: FoodCategoryType) => void;
};
const CategoryContext = createContext<CategoryContextType>({
  curCat: {
    _id: "",
    categoryName: "",
  },
  setCurCat: function () {},
});
export const CategoryContextProvider = ({
  children,
  currentCategory,
}: {
  children: React.ReactNode;
  currentCategory: FoodCategoryType;
}) => {
  const [curCat, setCurCat] = useState(currentCategory);
  const value = useMemo(() => {
    return { curCat, setCurCat };
  }, [curCat, setCurCat]);
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCurrentCategoryId = () => {
  const context = useContext(CategoryContext);
  return context;
};
