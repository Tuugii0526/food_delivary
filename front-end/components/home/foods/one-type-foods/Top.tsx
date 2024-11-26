import { poppins } from "@/app/fonts/fonts";
import { ChevronRight, StarsIcon } from "lucide-react";

export const Top = ({
  categoryName,
  length,
}: {
  categoryName: string;
  length: number;
}) => {
  return (
    <div className="w-full py-4 px-1 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <StarsIcon className="text-[#18BA51]" />
        <p
          className={`${poppins.className} text-[22px] leading-[33px] text-[#272727]`}
        >
          {categoryName}
        </p>
      </div>
      {length > 4 && (
        <div className="flex items-center gap-[5px] text-[#18BA51]">
          <p className=" font-normal text-sm">Бүгдийг харах</p>
          <ChevronRight />
        </div>
      )}
    </div>
  );
};
