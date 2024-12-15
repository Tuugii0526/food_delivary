"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { CountPropsFunctionsType } from "./types";
export const useCount = () => {
  const [count, setCount] = useState<number>(1);
  const addCount = useCallback(() => {
    {
      setCount((count) => count + 1);
    }
  }, []);
  const minusCount = useCallback(() => {
    setCount((count) => {
      if (count - 1 < 1) {
        return 1;
      } else {
        return count - 1;
      }
    });
  }, []);
  const returnValue: CountPropsFunctionsType = [count, addCount, minusCount];
  return returnValue;
};
export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  }, []);

  const inputProps = {
    value: inputValue,
    onChange: handleChange,
  };
  return inputProps;
};
export const useCheckFormInputs = () => {
  const [correct, setCorrect] = useState(false);
  const onChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    let letterSum = 0;
    const formData = new FormData(e.currentTarget);
    for (const data of formData.values()) {
      letterSum += data ? 1 : 0;
    }
    if (letterSum == formData.values().toArray().length) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, []);

  return { correct, onChange };
};
