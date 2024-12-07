"use client";

import { CartDispatchActionType, CountTypeForCart } from "@/lib/types";
import { discountPriceCalculator } from "@/lib/utils";
import React, {
  useContext,
  createContext,
  useReducer,
  Dispatch,
  useEffect,
} from "react";
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
  useEffect(() => {
    let localstorage: CountTypeForCart[];
    const cartOnLocal = localStorage.getItem("cart");
    if (cartOnLocal) {
      localstorage = JSON.parse(cartOnLocal);
    } else {
      localstorage = [];
    }
    dispatch({ type: "LOCALSTORAGE", localstorage: localstorage });
  }, []);
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
    case "LOCALSTORAGE": {
      return [...foodCounts, ...action.localstorage];
    }
    case "INSERTED": {
      const newState = [...foodCounts, action.insertedFoodCount];
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "DELETED": {
      const newState = foodCounts.filter((fC) => fC.food._id !== action.foodId);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "MINUSED": {
      const newState = foodCounts.map((fC) => {
        if (fC.food._id == action.foodId) {
          return {
            ...fC,
            howMany: fC.howMany - 1,
            howMuch: fC.howMuch - discountPriceCalculator(fC.food),
          };
        }
        return fC;
      });
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "PLUSED": {
      const newState = foodCounts.map((fC) => {
        if (fC.food._id == action.foodId) {
          return {
            ...fC,
            howMany: fC.howMany + 1,
            howMuch: fC.howMuch + discountPriceCalculator(fC.food),
          };
        }
        return fC;
      });
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "DELETE_ALL": {
      const newState: CountTypeForCart[] = [];
      localStorage.setItem("cart", JSON.stringify(newState));
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
