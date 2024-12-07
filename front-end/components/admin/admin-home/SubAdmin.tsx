import { AdminContextProvider } from "@/components/context/AdminContext";
import { FirstColumn } from "./FirstColumn";
import { SecondColumn } from "./SecondColumn";
import { FoodCategoryType } from "@/lib/types";
export const SubAdmin = ({
  categories,
}: {
  categories: FoodCategoryType[];
}) => {
  return (
    <AdminContextProvider categories={categories}>
      <FirstColumn />
      <SecondColumn />
    </AdminContextProvider>
  );
};
