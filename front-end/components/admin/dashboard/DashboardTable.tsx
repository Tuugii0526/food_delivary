import { Order } from "@/lib/types";
import { OneOrder } from "./OneOrder";

export const DashboardTable = async ({ data }: { data: Order[] }) => {
  return (
    <div className="w-full h-fit ">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="dashboard-table-headers">Order name</th>
            <th className="dashboard-table-headers">Buyer info</th>

            <th className="dashboard-table-headers">Per price</th>
            <th className="dashboard-table-headers">Quantity</th>
            <th className="dashboard-table-headers">Payment</th>
            <th className="dashboard-table-headers">Address</th>
            <th className="dashboard-table-headers">Delivery state</th>
            <th className="dashboard-table-headers"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <OneOrder key={d._id} order={d} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
