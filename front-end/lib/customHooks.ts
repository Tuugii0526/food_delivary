import { useState } from "react";
import { CountPropsFunctionsType } from "./types";
export const useCount = () => {
  const [count, setCount] = useState<number>(0);
  function addCount(): void {
    setCount((count) => count + 1);
  }
  function minusCount(): void {
    setCount((count) => {
      if (count - 1 < 0) {
        return 0;
      } else {
        return count - 1;
      }
    });
  }
  let returnValue: CountPropsFunctionsType;
  returnValue = [count, addCount, minusCount];
  return returnValue;
};
