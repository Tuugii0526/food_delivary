import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imageUrlOptimizer(url: string) {
  const arr = url.split("/upload");
  arr.splice(1, 0, "/upload/q_auto,f_auto");
  return arr.join("");
}
