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
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
type ContextType = {
  categoryResponse: CategoryResponseType;
  user: ValidatedUserType;
  editUser: (type: "name" | "email", value: string) => void;
};
const Context = createContext<ContextType>({
  categoryResponse: {
    success: false,
    message: "",
    categories: [],
  },
  user: {
    userId: "",
    name: "",
    email: "",
  },
  editUser: function () {},
});
export const ContextProvider = ({
  children,
  categoryResponse,
  u,
}: {
  children: React.ReactNode;
  categoryResponse: CategoryResponseType;
  u: ValidatedUserType;
}) => {
  const [user, setUser] = useState<ValidatedUserType>(u);
  useEffect(() => {
    setUser(u);
  }, [u]);
  const updateUser: Dispatch<SetStateAction<ValidatedUserType>> = setUser;
  const editUser = useCallback(
    (type: "name" | "email", value: string) => {
      updateUser((pre) => {
        switch (type) {
          case "name": {
            const newUser: ValidatedUserType = { ...pre, name: value };
            return newUser;
          }
          case "email": {
            const newUser: ValidatedUserType = {
              ...pre,
              email: value,
            };
            return newUser;
          }
        }
      });
    },
    [updateUser]
  );
  const value = useMemo(
    () => ({ categoryResponse, user, editUser }),
    [categoryResponse, user, editUser]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const useBeAwareContext = () => {
  const context = useContext(Context);
  return context;
};
