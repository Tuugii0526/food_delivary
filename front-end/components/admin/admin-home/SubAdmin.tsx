"use client";

import { CategoryContextProvider } from "@/components/context/CategoryContextProvider";
import { FirstColumn } from "./FirstColumn";
import { SecondColumn } from "./SecondColumn";
import { useBeAwareContext } from "@/components/context/ContextProvider";
export const SubAdmin = () => {
  const { categories } = useBeAwareContext();
  return (
    <CategoryContextProvider currentCategory={categories[0]}>
      <FirstColumn />
      <SecondColumn />
    </CategoryContextProvider>
  );
};
