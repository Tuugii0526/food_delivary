import {
  BookOpen,
  ChefHatIcon,
  Clock,
  Mail,
  MenuSquare,
  User,
} from "lucide-react";
import { UserInfoType } from "../types";

export const checkCategoryIcons = [
  {
    id: 1,
    iconName: "BookOpen",
    icon: <BookOpen />,
  },
  {
    id: 2,
    iconName: "Clock",
    icon: <Clock />,
  },
  {
    id: 3,
    iconName: "ChefHatIcon",
    icon: <ChefHatIcon />,
  },
  {
    id: 4,
    iconName: "MenuSquare",
    icon: <MenuSquare />,
  },
];
export const userInfos: UserInfoType[] = [
  { id: 1, icon: <User />, description: "Таны нэр", property: "name" },
  {
    id: 2,
    icon: <Mail />,
    description: "Имэйл хаяг",
    property: "email",
  },
];
