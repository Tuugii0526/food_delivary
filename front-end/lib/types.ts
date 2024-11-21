export type PineconeIconPropsType = {
  fill?: "white" | "black";
};
export type CheckCategoryType = {
  id: number;
  title: string;
  description: string;
  iconName: string;
};
export type FoodCategoryType = {
  categoryId: number;
  categoryName: string;
};
export type Food = {
  id: number;
  foodName: string;
  ingredient: string[];
  categoryId: number;
  categoryName: string;
  initialPrice: number;
  discountPercent: number;
  currency: string;
};
export type UserInfoType = {
  icon: JSX.Element;
  description: string;
  property: string;
};
export type CountPropsFunctionsType = [number, () => void, () => void];
