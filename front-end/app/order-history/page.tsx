import { SubOrderHistory } from "@/components/order-history/SubOrderHistory";
import { getTokenOnServer } from "@/lib/actions";
import { Order } from "@/lib/types";
export default async function Page() {
  let data: Order[] = [];
  try {
    const token = await getTokenOnServer();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/order?isUser=true`,
      {
        method: "get",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    if (res.status == 200) {
      const { orders } = await res.json();
      data = orders;
    }
    if (res.status == 401) {
      return (
        <div className="w-full container">
          <p>Please log in</p>
        </div>
      );
    }
  } catch (error) {
    return (
      <div className="w-full container">
        <p>{`${error}`}</p>
      </div>
    );
  }
  return <SubOrderHistory orders={data} />;
}
