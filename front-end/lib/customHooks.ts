import { ChangeEvent, useState } from "react";
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
  const returnValue: CountPropsFunctionsType = [count, addCount, minusCount];
  return returnValue;
};
export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  const inputProps = {
    value: inputValue,
    onChange: handleChange,
  };
  return inputProps;
};
export const useCheckFormInputs = () => {
  const [correct, setCorrect] = useState(false);
  const onChange = (e: ChangeEvent<HTMLFormElement>) => {
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
  };
  return { correct, onChange };
};
