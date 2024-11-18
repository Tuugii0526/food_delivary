import { poppins } from "@/app/fonts/fonts";
import { ChevronRight, StarsIcon } from "lucide-react";

export const Top = ({ categoryName }: { categoryName: string }) => {
  return (
    <div className="w-full py-4 px-1 flex justify-between">
      <div className="flex gap-2">
        <StarsIcon className="bg-[#18BA51]" />
        <p
          className={`${poppins.className} text-[22px] leading-[33px] text-[#272727]`}
        >
          {categoryName}
        </p>
      </div>
      <div className="flex items-center gap-[5px] text-[#18BA51]">
        <p className=" font-normal text-sm">Бүгдийг харах</p>
        <ChevronRight />
      </div>
    </div>
  );
};
