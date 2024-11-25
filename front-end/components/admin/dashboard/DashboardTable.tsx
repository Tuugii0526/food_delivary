import { orders, foods, users } from "@/lib/data-all/mockData";
import { DashboardTableRow } from "./DashboardTableRow";

export const DashboardTable = () => {
  const results: JSX.Element[] = [];

  orders.forEach((order) => {
    const user = users.find((user) => user._id === order.userId);
    order.foods.forEach((foodId) => {
      const food = foods.find((food) => food._id === foodId);
      results.push(
        <DashboardTableRow
          key={`${order._id}${user?._id}${food?._id}`}
          order={order}
          food={food}
          user={user}
        />
      );
    });
  });
  return (
    <div className="w-full h-fit ">
      <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="dashboard-table-headers">Order name</th>
            <th className="dashboard-table-headers">Buyer info</th>
            <th className="dashboard-table-headers">Payment</th>
            <th className="dashboard-table-headers">Address</th>
            <th className="dashboard-table-headers">Delivery state</th>
            <th className="dashboard-table-headers"></th>
          </tr>
        </thead>
        <tbody>{results}</tbody>
      </table>
    </div>
  );
};
