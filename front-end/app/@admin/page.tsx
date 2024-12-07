import { SubAdmin } from "@/components/admin/admin-home/SubAdmin";

export default async function Page() {
  let data;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/category`);
    if (!res.ok) {
      const data = await res.json();
      return (
        <div className="container flex gap-10 h-fit">
          Failed to fetch categories due to the error :{data.message}
        </div>
      );
    }
    data = await res.json();
  } catch (error) {
    return (
      <div className="container flex gap-10 h-fit">
        Failed to fetch categories due to the error :{`${error}`}
      </div>
    );
  }
  if (!data.data) {
    return (
      <div className="container flex gap-10 h-fit">
        <p>No data</p>
      </div>
    );
  }
  return (
    <div className="container flex gap-10 h-fit">
      <SubAdmin categories={data.data} />
    </div>
  );
}
