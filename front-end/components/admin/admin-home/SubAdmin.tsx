"use client";

import { CategoryContextProvider } from "@/components/context/CategoryContextProvider";
import { FirstColumn } from "./FirstColumn";
import { SecondColumn } from "./SecondColumn";
import { useBeAwareContext } from "@/components/context/ContextProvider";
export const SubAdmin = () => {
  const { categoryResponse } = useBeAwareContext();
  return (
    <CategoryContextProvider currentCategory={categoryResponse.categories[0]}>
      <FirstColumn />
      <SecondColumn />
    </CategoryContextProvider>
  );
};
