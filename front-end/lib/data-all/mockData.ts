import { CheckCategoryType } from "../types";
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
export const districtSelectOptions = [
  {
    id: 1,
    name: "Баянзүрх дүүрэг",
    value: "Баянзүрх дүүрэг",
  },
  {
    id: 2,
    name: "Хан-уул дүүрэг",
    value: "Хан-уул дүүрэг",
  },
  {
    id: 3,
    name: "Баянгол дүүрэг",
    value: "Баянгол дүүрэг",
  },
  {
    id: 4,
    name: "Сонгинохайрхан дүүрэг",
    value: "Сонгинохайрхан дүүрэг",
  },
  {
    id: 5,
    name: "Чингэлтэй дүүрэг",
    value: "Чингэлтэй дүүрэг",
  },
];
export const khorooSelectionOptions = [
  {
    id: 1,
    name: "1-р хороо",
    value: "1-р хороо",
  },
  {
    id: 2,
    name: "2-р хороо",
    value: "2-р хороо",
  },
  {
    id: 3,
    name: "3-р хороо",
    value: "3-р хороо",
  },
  {
    id: 4,
    name: "4-р хороо",
    value: "4-р хороо",
  },
  {
    id: 5,
    name: "5-р хороо",
    value: "5-р хороо",
  },
  {
    id: 6,
    name: "6-р хороо",
    value: "6-р хороо",
  },
  {
    id: 7,
    name: "7-р хороо",
    value: "7-р хороо",
  },
];
export const deliveryColor: {
  [key: string]: string;
} = {
  PROGRESS: "#FDF4B6",
  DELIVERED: "#C1E6CF",
  " WAITING": "#ECEDF0",
  ACTIVE: "#C1E6CF",
};
export const orderColor: {
  [key: string]: string;
} = {
  0: "#f7dda1",
  1: "#eed5e8",
  2: "#ecd5ee",
  3: "#dfd5ee",
  4: "#53ded3",
};
export const payStates = [
  {
    id: 1,
    value: "PAID",
    name: "Paid",
  },
  {
    id: 2,
    value: "NOT_PAID",
    name: "Not Paid",
  },
];
export const deliveryStates = [
  { id: 1, value: "PROGRESS", name: "Progress" },
  {
    id: 2,
    value: "DELIVERED",
    name: "Delivered",
  },
  {
    id: 3,
    value: "WAITING",
    name: "Waiting",
  },
  {
    id: 4,
    value: "ACTIVE",
    name: "Active",
  },
];
