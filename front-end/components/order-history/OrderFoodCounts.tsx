import { CountTypeForCart } from "@/lib/types";
import Image from "next/image";

export const OrderFoodCounts = ({
  foodCount,
}: {
  foodCount: CountTypeForCart;
}) => {
  return (
    <div className="w-full flex justify-between h-[68px] items-center border-b border-b-[#D6D8DB]">
      <div className="flex items-center gap-2">
        <div className="h-[68px] w-[68px] relative rounded-md overflow-hidden ">
          <Image
            src={foodCount.food.image}
            alt={foodCount.food.foodName}
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
        <p>{foodCount.food.foodName}</p>
      </div>
      <p>({foodCount.howMany})</p>
    </div>
  );
};
