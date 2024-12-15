import { poppins } from "@/app/fonts/fonts";
import { FoodCategoryType } from "@/lib/types";
import { ChevronRight, StarsIcon } from "lucide-react";
import Link from "next/link";

export const Top = ({
  category,
  length,
}: {
  category: FoodCategoryType;
  length: number;
}) => {
  return (
    <div className="w-full py-4 px-1 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <StarsIcon className="text-[#18BA51]" />
        <p
          className={`${poppins.className} text-[22px] leading-[33px] text-[#272727]`}
        >
          {category?.categoryName}
        </p>
      </div>
      {length > 4 && (
        <Link
          href={`/menu?categoryQuery=${category?._id}`}
          className="flex items-center gap-[5px] text-[#18BA51]"
        >
          <p className=" font-normal text-sm">Бүгдийг харах</p>
          <ChevronRight />
        </Link>
      )}
    </div>
  );
};
