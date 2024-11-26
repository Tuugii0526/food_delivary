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
  _id: string;
  categoryName: string;
};
export type Food = {
  _id: string;
  foodName: string;
  ingredient: string[];
  image: string;
  categoryId: string;
  categoryName: string; //will deprecated soon
  initialPrice: number;
  discountPercent: number;
};
export type Order = {
  _id: string;
  userId: string;
  orderNumber: number;
  foods: string[];
  totalPrice: number;
  process: {
    isPaid: "PAID" | "NOT_PAID";
    deliveryStatus: "PROGRESS" | "DELIVERED" | "WAITING" | "ACTIVE";
  };
  createdAt: Date;
  district: string;
  khoroo: string;
  apartment: string;
};
export type OrderProcessType = {
  isPaid: string;
  deliveryStatus: string;
};
export type UserInfoType = {
  icon: JSX.Element;
  description: string;
  property: string;
};
export type CountPropsFunctionsType = [number, () => void, () => void];
export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  role: "ADMIN" | "USER";
};

export type FormActionPreviousState = {
  error: string;
};
export type SearchParamsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;
export type ParamsType = Promise<{
  [key: string]: string | string[] | undefined;
}>;
export type SearchParamsTypeNotPromise = {
  [key: string]: string | string[] | undefined;
};

export type CategoryGroupFoodsType = {
  Category: FoodCategoryType & { _v: number };
  CategoryFoods: (Food & { _v: number })[];
};
