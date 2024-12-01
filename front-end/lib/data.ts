import { cache } from "react";
import { FoodCategoryType } from "./types";

export const getCategories = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/category`);
  const data = await res.json();
  if (res.ok) {
    const categories: FoodCategoryType[] = data.data;
    return { success: true, message: "", categories: categories };
  } else {
    const { message } = data;
    return {
      success: false,
      message: message as string,
      categories: [],
    };
  }
});

export async function getUser(token: string | undefined) {
  try {
    const resTwo = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/auth`, {
      method: "post",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    const data: {
      userId: string;
      role?: "ADMIN" | "USER";
      exp?: number;
      iat?: number;
    } = await resTwo.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
