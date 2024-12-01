import { CheckCategoryType } from "@/lib/types";
import { checkCategoryIcons } from "@/lib/data-all/CheckCategoryIcons";
import { poppins } from "@/app/fonts/fonts";
export const CheckCategory = ({
  checkCategory,
}: {
  checkCategory: CheckCategoryType;
}) => {
  const foundIcon = checkCategoryIcons.find(
    (icon) => icon?.iconName == checkCategory?.iconName
  );
  return (
    <div className="grow h-fit rounded-2xl shadow-md p-4 border border-[#D6D8DB] flex flex-col gap-[15px]">
      <div className="p-4 text-[#18BA51] w-[30px] h-[30px]">
        {foundIcon?.icon}
      </div>
      <div className="flex flex-col gap-1">
        <p
          className={`${poppins.className} text-[#272727] text-[18px] leading-[27px]`}
        >
          {checkCategory?.title}
        </p>
        <p className="font-normal text-sm leading-4 text-[#272727] opacity-75">
          {checkCategory?.description}
        </p>
      </div>
    </div>
  );
};
