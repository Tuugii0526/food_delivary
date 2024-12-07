"use client";

import {
  CategoryResponseType,
  // FoodCategoryType,
  ValidatedUserType,
} from "@/lib/types";
import {
  useContext,
  createContext,
  //  useState,
  useMemo,
} from "react";
type ContextType = {
  categoryResponse: CategoryResponseType;
  user: ValidatedUserType;
};
const Context = createContext<ContextType>({
  categoryResponse: {
    success: false,
    message: "",
    categories: [],
  },
  user: {
    userId: "",
  },
});
export const ContextProvider = ({
  children,
  categoryResponse,
  user,
}: {
  children: React.ReactNode;
  categoryResponse: CategoryResponseType;
  user: ValidatedUserType;
}) => {
  // const [ct] = useState<FoodCategoryType[]>(categoryResponse.categories);
  //ct is categories
  const value = useMemo(
    () => ({ categoryResponse, user }),
    [categoryResponse, user]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useBeAwareContext = () => {
  const context = useContext(Context);
  return context;
};
