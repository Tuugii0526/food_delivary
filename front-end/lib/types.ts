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
  foodNumber: number;
  image: string;
  categoryId: string;
  categoryName: string; //will deprecated soon
  initialPrice: number;
  discountPercent: number;
};
export type Order = {
  _id: string;
  userId: string;
  userName: string;
  orderNumber: number;
  foodCounts: CountTypeForCart[];
  totalPrice: number;
  isPaid: "PAID" | "NOT_PAID";
  deliveryStatus: "PROGRESS" | "DELIVERED" | "WAITING" | "ACTIVE";
  createdAt: Date;
  district: string;
  khoroo: string;
  apartment: string;
  addressDetail: string;
  phoneNumber: string;
  paymentType: "CASH" | "CARD";
};
export type CountType = {
  foodId: string;
  howMany: number;
  howMuch: number;
};
export type CountTypeForCart = {
  foodId: string;
  howMany: number;
  howMuch: number;
  food: Food;
};
export type CartDispatchActionType =
  | { type: "LOCALSTORAGE"; localstorage: CountTypeForCart[] }
  | { type: "INSERTED"; insertedFoodCount: CountTypeForCart }
  | { type: "PLUSED"; foodId: string }
  | { type: "MINUSED"; foodId: string }
  | { type: "DELETED"; foodId: string }
  | { type: "DELETE_ALL" };

export type OrderProcessType = {
  isPaid: string;
  deliveryStatus: string;
};
export type UserInfoType = {
  icon: JSX.Element;
  description: string;
  property: string | undefined;
};
export type CountPropsFunctionsType = [number, () => void, () => void];

//user type might need fixing ,because of the phoneNumber
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
// export type SearchParamsTypeNotPromise = {
//   errors: validatedFields.error.flatten().fieldErrors
// };

export type CategoryGroupFoodsType = {
  Category: FoodCategoryType & { _v: number };
  CategoryFoods: (Food & { _v: number })[];
};

export type SignupState = {
  errors: {
    [key: string]: string[];
  };
  messages: string;
};
export type ValidatedUserType = {
  userId: string;
  name?: string | undefined;
  email?: string | undefined;
  role?: "ADMIN" | "USER" | undefined;
};
export type CategoryResponseType = {
  success: boolean;
  message: string;
  categories: FoodCategoryType[];
};
