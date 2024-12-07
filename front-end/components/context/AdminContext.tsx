"use client";

import { FoodCategoryType } from "@/lib/types";
import {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
type AdminContextType = {
  curt: FoodCategoryType;
  setCurt: (value: FoodCategoryType) => void;
  cts: FoodCategoryType[];
  editCategoryName: (id: string, newName: string) => void;
  foodAddSensor: boolean;
  editFoodSensor: () => void;
};
const AdminContext = createContext<AdminContextType>({
  curt: {
    _id: "",
    categoryName: "",
  },
  setCurt: function () {},
  cts: [],
  editCategoryName: function () {},
  foodAddSensor: false,
  editFoodSensor: function () {},
});
export const AdminContextProvider = ({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: FoodCategoryType[];
}) => {
  const [cts, setCts] = useState<FoodCategoryType[]>(categories);
  const [curt, setCurt] = useState(
    categories[Math.floor(categories.length / 2)]
  );
  const [foodAddSensor, setFoodAddSensor] = useState<boolean>(false);
  const updateCurt: Dispatch<SetStateAction<FoodCategoryType>> = setCurt;
  const updateCts: Dispatch<SetStateAction<FoodCategoryType[]>> = setCts;
  const updateFoodAddSensor: Dispatch<SetStateAction<boolean>> =
    setFoodAddSensor;
  const editFoodSensor = useCallback(() => {
    updateFoodAddSensor((pre) => !pre);
  }, [updateFoodAddSensor]);
  const editCategoryName = useCallback(
    (id: string, newName: string) => {
      updateCts((cts) => {
        return cts.map((ct) => {
          if (ct._id == id) {
            return { ...ct, categoryName: newName };
          }
          return ct;
        });
      });
      updateCurt((curt) => ({ ...curt, categoryName: newName }));
    },
    [updateCts, updateCurt]
  );
  const value = useMemo(() => {
    return {
      curt,
      setCurt,
      cts,
      editCategoryName,
      foodAddSensor,
      editFoodSensor,
    };
  }, [cts, curt, setCurt, editCategoryName, foodAddSensor, editFoodSensor]);
  useEffect(() => {
    setCts(categories);
    setCurt(categories[Math.floor(categories.length / 2)]);
  }, [categories]);
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  return context;
};
