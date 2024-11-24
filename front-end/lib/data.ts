import { FoodCategoryType } from "./types";

export async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/category`);
  const data = await res.json();
  if (res.ok) {
    const categories: FoodCategoryType[] = data.data;
    return { success: true, message: "", categories: categories };
  } else {
    const message = data;
    return {
      success: false,
      categories: [],
      message: message,
    };
  }
}
