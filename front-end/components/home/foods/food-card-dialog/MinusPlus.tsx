"use client";

import { CountPropsFunctionsType } from "@/lib/types";

export const MinusPlus = ({
  countPropsFunctions,
}: {
  countPropsFunctions: CountPropsFunctionsType;
}) => {
  const [count, addCount, minusCount] = countPropsFunctions;
  return (
    <div className="flex w-full justify-between ">
      <button
        className="minus-plus"
        onClick={() => {
          minusCount();
        }}
      >
        -
      </button>
      {count}
      <button
        className="minus-plus"
        onClick={() => {
          addCount();
        }}
      >
        +
      </button>
    </div>
  );
};
