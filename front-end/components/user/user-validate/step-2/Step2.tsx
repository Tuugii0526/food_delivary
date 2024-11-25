import { OrderFoodDisplay } from "../../OrderFoodDisplay";
import { Step } from "../Step";
import { foods } from "@/lib/data-all/mockData";
export const Step2 = () => {
  return (
    <div className="flex w-[49%] h-full flex-col gap-4  rounded-2xl shadow-xl">
      <Step />
      <div className="flex flex-col gap-[40px] p-6  overflow-y-scroll">
        {foods.map((food) => (
          <OrderFoodDisplay key={food?._id} food={food} />
        ))}
      </div>
    </div>
  );
};
