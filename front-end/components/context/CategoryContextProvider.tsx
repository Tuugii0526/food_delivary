"use client";

import React, { useContext, createContext, useState, useMemo } from "react";
type CategoryContextType = {
  currentCategoryId: string;
  setCurrentCategoryId: (value: string) => void;
};
const CategoryContext = createContext<CategoryContextType>({
  currentCategoryId: "",
  setCurrentCategoryId: function () {},
});
export const CategoryContextProvider = ({
  children,
  currentCategory,
}: {
  children: React.ReactNode;
  currentCategory: string;
}) => {
  const [currentCategoryId, setCurrentCategoryId] = useState(currentCategory);
  const value = useMemo(() => {
    return { currentCategoryId, setCurrentCategoryId };
  }, [currentCategoryId, setCurrentCategoryId]);
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
