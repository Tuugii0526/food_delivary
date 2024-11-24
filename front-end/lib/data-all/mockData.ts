import {
  CheckCategoryType,
  Food,
  FoodCategoryType,
  Order,
  User,
} from "../types";

export const navs = [
  {
    id: 1,
    title: "нүүр",
    link: "/",
  },
  {
    id: 2,
    title: "хоолны цэс",
    link: "/menu",
  },
  {
    id: 3,
    title: "хүргэлтийн бүс",
    link: "/location-range",
  },
];
export const adminNavs = [
  {
    id: 1,
    title: "menu",
    link: "/",
  },
  {
    id: 2,
    title: "dashboard",
    link: "/dashboard",
  },
  {
    id: 3,
    title: "finance",
    link: "/finance",
  },
];
export const contracts = [
  {
    id: 1,
    title: "Нүүр",
  },
  {
    id: 2,
    title: "Холбоо барих",
  },
  {
    id: 3,
    title: "Хоолны цэс",
  },
  {
    id: 4,
    title: "Үйлчилгээний нөхцөл",
  },
  {
    id: 5,
    title: "Хүргэлтийн бүс",
  },
  {
    id: 6,
    title: "Нууцлалын бодлого",
  },
];
export const checkCategoriesData: CheckCategoryType[] = [
  {
    id: 1,
    title: "Хүргэлтийн төлөв хянах",
    description: "Захиалга бэлтгэлийн явцыг хянах",
    iconName: "BookOpen",
  },
  {
    id: 2,
    title: "Шуурхай хүргэлт",
    description: "Захиалга бэлтгэлийн явцыг хянах",
    iconName: "Clock",
  },
  {
    id: 3,
    title: "Эрүүл, баталгаат орц",
    description: "Захиалга бэлтгэлийн явцыг хянах",
    iconName: "ChefHatIcon",
  },
  {
    id: 4,
    title: "Хоолны өргөн сонголт",
    description: "Захиалга бэлтгэлийн явцыг хянах",
    iconName: "MenuSquare",
  },
];
export const foodCategories: FoodCategoryType[] = [
  {
    _id: "1",
    categoryName: "Хямдралтай",
  },
  {
    _id: "2",
    categoryName: "Үндсэн хоол",
  },
];
export const foods: Food[] = [
  {
    _id: "1",
    foodName: "Өглөөний хоол",
    ingredient: ["сүү", "овьёос"],
    image: "/heroFood.png",
    categoryId: "1",
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 20,
  },
  {
    _id: "2",
    foodName: "Зайрмаг",
    ingredient: ["сүү", "крийм"],
    image: "/heroFood.png",
    categoryId: "1",
    categoryName: "Хямдралтай",
    initialPrice: 6800,
    discountPercent: 0,
  },
  {
    _id: "3",
    foodName: "Өглөөний хоол",
    ingredient: ["сүү", "чавга"],
    image: "/heroFood.png",
    categoryId: "1",
    categoryName: "Хямдралтай",
    initialPrice: 36800,
    discountPercent: 30,
  },
  {
    _id: "4",
    foodName: "Breakfast",
    ingredient: ["сүү", "чавга", "алим"],
    image: "/heroFood.png",
    categoryId: "1",
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 40,
  },
  {
    _id: "5",
    foodName: "Breakfast",
    ingredient: ["сүү", "чавга", "алим", "банана"],
    image: "/heroFood.png",
    categoryId: "1",
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 100,
  },
  {
    _id: "6",
    foodName: "Breakfast",
    ingredient: ["сүү", "чавга", "алим", "банана"],
    image: "/heroFood.png",
    categoryId: "1",
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 10,
  },
  {
    _id: "7",
    foodName: "Main pizza",
    ingredient: ["сүү", "сонгино", "гурил", "бяслаг"],
    image: "/heroFood.png",
    categoryId: "2",
    categoryName: "Үндсэн хоол",
    initialPrice: 3800,
    discountPercent: 20,
  },
  {
    _id: "8",
    foodName: "Food tart",
    ingredient: [
      "сүү",
      "сонгино",
      "гурил",
      "бяслаг",
      "чавга",
      "алим",
      "банана",
    ],
    image: "/heroFood.png",
    categoryId: "2",
    categoryName: "Үндсэн хоол",
    initialPrice: 348000,
    discountPercent: 10,
  },
  {
    _id: "9",
    foodName: "Cereal",
    ingredient: ["овьёос"],
    image: "/heroFood.png",
    categoryId: "2",
    categoryName: "Үндсэн хоол",
    initialPrice: 5334800,
    discountPercent: 10,
  },
];
export const users: User[] = [
  {
    _id: "1",
    name: "Tuguldur",
    email: "namjildorjtuguldur1234@gmail.com",
    password: "Tuugii1234",
    phoneNumber: 90914944,
    role: "ADMIN",
  },
  {
    _id: "2",
    name: "Tuvshingerel",
    email: "tuvshingerel1234@gmail.com",
    password: "Tuvshee1234",
    phoneNumber: 95394944,
    role: "USER",
  },
];
export const orders: Order[] = [
  {
    _id: "1",
    userId: "2",
    orderNumber: 1,
    foods: ["6", "8", "1"],
    totalPrice: 800,
    process: {
      isPaid: "PAID",
      deliveryStatus: "PROGRESS",
    },
    createdAt: new Date(),
    district: "Bayngol",
    khoroo: "5",
    apartment: "Narnii khoroolol 19-r bair",
  },
];
export const deliveryStates = {
  PROGRESS: "#FDF4B6",
  DELIVERED: "#C1E6CF",
  WAITING: "#ECEDF0",
  ACTIVE: "#C1E6CF",
};
