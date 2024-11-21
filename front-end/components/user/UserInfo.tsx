import { UserInfoType } from "@/lib/types";
import { Pencil } from "lucide-react";

export const UserInfo = ({ icon, description, property }: UserInfoType) => {
  return (
    <div className="flex gap-2 py-2 px-5 rounded-sm bg-[#F6F6F6]">
      <div className="p-2 rounded-full bg-white ">{icon}</div>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-[#888A99] text-xs font-normal leading-[14px]">
          {description}
        </p>
        <p className="text-base leading-[19px] text-[#0D1118] font-normal">
          {property}
        </p>
      </div>
      <div className="flex grow justify-end items-center text-[#18BA51]">
        <Pencil />
      </div>
    </div>
  );
};
