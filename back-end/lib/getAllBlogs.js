import { Category, Food } from "../model/index.js";
export async function getAllBlogsByCategories() {
  const categories = await Category.find();
  const categoryPromises = categories.map((category) =>
    Food.find({ categoryId: category._id })
  );

  const foodsByCategories = await Promise.all(categoryPromises);
  const result = [];
  for (let i = 0; i < foodsByCategories.length; i++) {
    result.push({
      Category: categories[i],
      CategoryFoods: foodsByCategories[i],
    });
  }
  return result;
}
