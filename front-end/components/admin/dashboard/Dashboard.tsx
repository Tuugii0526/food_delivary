import { Order } from "@/lib/types";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardTable } from "./DashboardTable";
import { AdminPagination } from "./Pagination";
import { getTokenOnServer } from "@/lib/actions";
import { toast } from "sonner";

export const Dashboard = async () => {
  let data: Order[];
  try {
    const token = await getTokenOnServer();
    const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/order`, {
      method: "get",
      headers: {
        Authorization: `${token}`,
      },
    });
    if (res.status == 401) {
      toast("Please sign in. Unauthorized error");
      return;
    }
    if (res.status == 500) {
      const data = await res.json();
      toast(`Internal server error occured:${data?.error}`);
    }
    const objectData = await res.json();
    data = objectData?.orders;
    if (!data.length) {
      return <p>No data</p>;
    }
  } catch (error) {
    return <p>Error occured:{`${error}`}</p>;
  }
  return (
    <div className="w-full h-fit px-6">
      <DashboardHeader />
      <DashboardTable data={data} />
      <AdminPagination />
    </div>
  );
};
