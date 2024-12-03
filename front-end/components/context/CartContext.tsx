"use client";

import { CartDispatchActionType, CountTypeForCart } from "@/lib/types";
import { discountPriceCalculator } from "@/lib/utils";
import React, { useContext, createContext, useReducer, Dispatch } from "react";
const CartContext = createContext<CountTypeForCart[] | undefined>(undefined);
const CartDispatchContext = createContext<Dispatch<CartDispatchActionType>>(
  (action: CartDispatchActionType): void => {
    console.log(action);
  }
);
export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [foodCounts, dispatch] = useReducer<
    React.Reducer<CountTypeForCart[], CartDispatchActionType>
  >(cartReducer, []);
  console.log("food counts:", foodCounts);
  return (
    <CartContext.Provider value={foodCounts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
function cartReducer(
  foodCounts: CountTypeForCart[],
  action: CartDispatchActionType
): CountTypeForCart[] {
  switch (action.type) {
    case "INSERTED": {
      return [...foodCounts, action.insertedFoodCount];
    }
    case "DELETED": {
      return foodCounts.filter((fC) => fC.foodId !== action.foodId);
    }
    case "MINUSED": {
      return foodCounts.map((fC) => {
        if (fC.foodId == action.foodId) {
          return {
            ...fC,
            howMany: fC.howMany - 1,
            howMuch: fC.howMuch - discountPriceCalculator(fC.food),
          };
        }
        return fC;
      });
    }
    case "PLUSED": {
      return foodCounts.map((fC) => {
        if (fC.foodId == action.foodId) {
          return {
            ...fC,
            howMany: fC.howMany + 1,
            howMuch: fC.howMuch + discountPriceCalculator(fC.food),
          };
        }
        return fC;
      });
    }
    default: {
      return [];
    }
  }
}
export const useCart = () => {
  return useContext(CartContext);
};
export const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};
