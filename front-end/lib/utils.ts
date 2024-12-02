import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { passwordChecks } from "./data-all/checks";
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
// export function deleteToken() {
//   document.cookie = "token=;max-age=0";
// }
