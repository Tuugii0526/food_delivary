export const DashboardTable = () => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
