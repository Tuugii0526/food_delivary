import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { passwordChecks } from "./data-all/checks";
import { CountTypeForCart, Food } from "./types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imageUrlOptimizer(url: string) {
  const arr = url.split("/upload");
  arr.splice(1, 0, "/upload/q_auto,f_auto");
  return arr.join("");
}
export function isPasswordCorrect(password: string) {
  let canBePassed: boolean | undefined = undefined;
  for (const regex of passwordChecks) {
    canBePassed =
      typeof canBePassed == "undefined"
        ? regex.test(password)
        : canBePassed && regex.test(password);
    if (canBePassed == false) {
      return false;
    }
  }
  return true;
}
export const discountPriceCalculator = (food: Food): number => {
  return Math.floor(((100 - food.discountPercent) / 100) * food.initialPrice);
};

export const cartTotalPriceCalculator = (
  cart: CountTypeForCart[] | undefined
) => {
  if (!cart) {
    return 0;
  } else {
    return cart.reduce((acc, element) => acc + element.howMuch, 0);
  }
};

export const getToken = () => {
  if (typeof document !== "undefined") {
    const cookies = document.cookie;
    if (!cookies) {
      return "";
    } else {
      const token = cookies
        ?.split(";")
        ?.filter((cookie) => /\s*token=/.test(cookie))[0]
        ?.split("=")[1];
      return token;
    }
  } else {
    return "";
  }
};
export const moneyFormatter = (() => {
  const formatter = new Intl.NumberFormat();
  return (number: number) => {
    return formatter.format(number);
  };
})();
//------------------------------For temporary , filter will be used , but in the future , bs will be utilized-----------------------------------------------------
// export function searchCountFood(
//   food: Food,
//   countFoods: CountTypeForCart[]
// ) {
//   let min = 0;
//   let up = countFoods.length - 1;
//   while (min <= up) {
//     const pivot = min + Math.floor((up - min) / 2);
//     if (countFoods[pivot].foodId === foodId) {
//       return true;
//     }
//   }
// }
