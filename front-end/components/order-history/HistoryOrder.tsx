import { Order } from "@/lib/types";
import { StepWaitingState } from "../user/user-validate/general-step/StepWaitingState";
import { StepSuccessState } from "../user/user-validate/general-step/StepSuccessState";
import { poppins } from "@/app/fonts/fonts";

export const HistoryOrder = ({
  order,
  chosenOrder,
  setChosenOrder,
}: {
  order: Order;
  chosenOrder: Order;
  setChosenOrder: (value: Order) => void;
}) => {
  const date = new Date(order.createdAt);
  const dateFixed = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
  const isOrderSuccess =
    order.isPaid == "PAID" && order.deliveryStatus == "DELIVERED";
  return (
    <div
      className={`w-full p-4 flex justify-between items-center border-b transition-all ${
        isOrderSuccess ? "border-b-green-400" : "border-b-blue-500"
      } ${chosenOrder._id == order._id ? "" : "opacity-70"}`}
      onClick={() => {
        setChosenOrder(order);
      }}
    >
      <div className="flex gap-3">
        {isOrderSuccess ? <StepSuccessState /> : <StepWaitingState />}
        <div className="flex flex-col h-full justify-around">
          <div
            className={`flex gap-2 ${
              chosenOrder._id == order._id ? "font-semibold" : ""
            }`}
          >
            <p>Захиалга</p>
            <p>#{order.orderNumber}</p>
          </div>
          <p
            className={`${isOrderSuccess ? "text-green-400" : "text-blue-500"}`}
          >
            {isOrderSuccess ? "Амжилттай" : "Хүлээгдэж буй"}
          </p>
        </div>
      </div>
      <div>{dateFixed}</div>
    </div>
  );
};
