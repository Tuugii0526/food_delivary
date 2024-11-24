import { Food } from "@/lib/types";
import { FoodEditDialog } from "../dialog/FoodEditDialog";
import { FoodCreateDialog } from "../dialog/FoodCreateDialog";
import { getCategories } from "@/lib/data";
export async function AdminAddFood({
  children,
  food,
}: Readonly<{
  children: React.ReactNode;
  food?: Food;
}>) {
  const res = await getCategories();
  if (typeof food !== "undefined") {
    return <FoodEditDialog food={food}>{children}</FoodEditDialog>;
  } else {
    if (res.success) {
      return (
        <FoodCreateDialog categories={res.categories}>
          {children}
        </FoodCreateDialog>
      );
    } else {
      return;
    }
  }
}
