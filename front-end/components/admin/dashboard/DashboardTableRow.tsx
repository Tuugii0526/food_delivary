import { Food, Order, User } from "@/lib/types";
import { Paid } from "../is-paid-state/Paid";
import { NotPaid } from "../is-paid-state/NotPaid";
import { deliveryStates } from "@/lib/data-all/mockData";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import { AdminOrderEdit } from "./AdminOrderEdit";
export const DashboardTableRow = ({
  order,
  food,
  user,
}: {
  order: Order;
  food: Food | undefined;
  user: User | undefined;
}) => {
  return (
    <tr>
      <td>
        <div className=" flex items-center gap-2 px-6 py-4">
          <div className="w-10 h-10 relative">
            <Image
              src={food?.image || "./heroFood.png"}
              alt={`${food?.foodName}`}
              fill
            />
          </div>
          <div className="flex flex-col ">
            <p className="table-row-highlight-text">
              {"#"}
              {order.orderNumber}
            </p>
            <p className="table-row-no-highlight-text">{food?.foodName}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col  px-6 py-4">
          <p className="table-row-highlight-text">{user?.phoneNumber}</p>
          <p className="table-row-no-highlight-text">{user?.name}</p>
        </div>
      </td>
      <td>
        <div className="flex  items-center  gap-4  px-6 py-4">
          <div className="flex flex-col ">
            <p className="table-row-highlight-text">{order.totalPrice}</p>
            <p className="table-row-no-highlight-text">{`${order.createdAt}`}</p>
          </div>
          {order.process.isPaid === "PAID" ? <Paid /> : <NotPaid />}
        </div>
      </td>
      <td>
        <div className="w-[200px] text-wrap  px-6 py-4">
          {order.district}
          {","}
          {order.khoroo}
          {","}
          {order.apartment}
          {","}
        </div>
      </td>
      <td>
        <div
          className="h-fit w-fit rounded-lg  px-6 py-4"
          style={{
            backgroundColor: `${deliveryStates[order.process.deliveryStatus]}`,
          }}
        >
          {order.process.deliveryStatus}
        </div>
      </td>
      <td>
        <AdminOrderEdit process={order.process}>
          <EllipsisVertical className=" text-[#5E6166]" />
        </AdminOrderEdit>
      </td>
    </tr>
  );
};
