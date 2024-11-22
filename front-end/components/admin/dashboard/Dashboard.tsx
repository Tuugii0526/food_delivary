import { DashboardHeader } from "./DashboardHeader";
import { DashboardTable } from "./DashboardTable";

export const Dashboard = () => {
  return (
    <div className="w-full h-fit px-6">
      <DashboardHeader />
      <DashboardTable />
    </div>
  );
};
