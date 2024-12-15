import { OneTypeFoods } from "./OneTypeFoods";
import { CategoryGroupFoodsType } from "@/lib/types";
export const FoodsContainer = async ({
  query,
}: {
  query: string | string[];
}) => {
  let data;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}/food?searchQuery=${query}`
    );
    data = await res.json();
  } catch (error) {
    return <div className="text-red-600">Error !! ${`${error}`}</div>;
  }
  return (
    <div className="container flex flex-col gap-20 mb-20">
      {data.success ? (
        data?.data?.length ? (
          data?.data?.map((d: CategoryGroupFoodsType) => {
            if (d.CategoryFoods.length) {
              return (
                <OneTypeFoods
                  key={d?._id?._id}
                  foods={d?.CategoryFoods}
                  category={d?._id}
                />
              );
            }
          })
        ) : (
          <p>No data</p>
        )
      ) : (
        <p className="text-red-600">{data.message}</p>
      )}
    </div>
  );
};
