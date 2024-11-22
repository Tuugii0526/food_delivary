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
export const checkCategoriesData = [
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
export const foodCategories = [
  {
    categoryId: 1,
    categoryName: "Хямдралтай",
  },
  {
    categoryId: 2,
    categoryName: "Үндсэн хоол",
  },
];
export const foods = [
  {
    id: 1,
    foodName: "Өглөөний хоол",
    ingredient: ["сүү", "овьёос"],
    image: "/heroFood.png",
    categoryId: 1,
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 20,
    currency: "MN",
  },
  {
    id: 2,
    foodName: "Зайрмаг",
    ingredient: ["сүү", "крийм"],
    image: "/heroFood.png",
    categoryId: 1,
    categoryName: "Хямдралтай",
    initialPrice: 6800,
    discountPercent: 0,
    currency: "MN",
  },
  {
    id: 3,
    foodName: "Өглөөний хоол",
    ingredient: ["сүү", "чавга"],
    image: "/heroFood.png",
    categoryId: 1,
    categoryName: "Хямдралтай",
    initialPrice: 36800,
    discountPercent: 30,
    currency: "MN",
  },
  {
    id: 4,
    foodName: "Breakfast",
    ingredient: ["сүү", "чавга", "алим"],
    image: "/heroFood.png",
    categoryId: 1,
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 40,
    currency: "MN",
  },
  {
    id: 5,
    foodName: "Breakfast",
    ingredient: ["сүү", "чавга", "алим", "банана"],
    image: "/heroFood.png",
    categoryId: 1,
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 100,
    currency: "MN",
  },
  {
    id: 6,
    foodName: "Breakfast",
    ingredient: ["сүү", "чавга", "алим", "банана"],
    image: "/heroFood.png",
    categoryId: 1,
    categoryName: "Хямдралтай",
    initialPrice: 16800,
    discountPercent: 10,
    currency: "MN",
  },
  {
    id: 7,
    foodName: "Main pizza",
    ingredient: ["сүү", "сонгино", "гурил", "бяслаг"],
    image: "/heroFood.png",
    categoryId: 2,
    categoryName: "Үндсэн хоол",
    initialPrice: 3800,
    discountPercent: 20,
    currency: "MN",
  },
  {
    id: 8,
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
    categoryId: 2,
    categoryName: "Үндсэн хоол",
    initialPrice: 348000,
    discountPercent: 10,
    currency: "MN",
  },
  {
    id: 9,
    foodName: "Cereal",
    ingredient: ["овьёос"],
    image: "/heroFood.png",
    categoryId: 2,
    categoryName: "Үндсэн хоол",
    initialPrice: 5334800,
    discountPercent: 10,
    currency: "MN",
  },
];
export const orders = [
  {
    _id: 1,
    userId: 1,
    orderNumber: 1,
    foods: [6, 8, 1],
    totalPrice: 800,
    process: {
      isPaid: "PAID",
      deliveryStatus: "PROGRESS",
    },
    createdAt: new Date(),
    distric: "Bayngol",
    khoroo: "5",
    apartment: "Narnii khoroolol 19-r bair",
  },
];
