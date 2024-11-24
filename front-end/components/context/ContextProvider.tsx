"use client";

import { FoodCategoryType } from "@/lib/types";
import { useContext, createContext, useState, useMemo } from "react";
type ContextType = {
  categories: FoodCategoryType[];
  message: string;
};
const Context = createContext<ContextType>({
  categories: [],
  message: "",
});
export const ContextProvider = ({
  children,
  categories,
  message,
}: {
  children: React.ReactNode;
  categories: FoodCategoryType[];
  message: string;
}) => {
  const [ct, setCt] = useState<FoodCategoryType[]>(categories);
  //ct is categories
  const value = useMemo(
    () => ({ categories: ct, message: message }),
    [ct, setCt, message]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useBeAwareContext = () => {
  const context = useContext(Context);
  return context;
};
