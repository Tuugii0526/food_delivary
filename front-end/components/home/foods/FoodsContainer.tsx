import { OneTypeFoods } from "./OneTypeFoods";
import { CategoryGroupFoodsType } from "@/lib/types";
export const FoodsContainer = async () => {
  let data;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/food`);
    data = await res.json();
  } catch (error) {
    return <div>Error !! ${`${error}`}</div>;
  }

  return (
    <div className="container flex flex-col gap-20 mb-20">
      {data.success ? (
        data.data.length ? (
          data.data.map((d: CategoryGroupFoodsType) => {
            if (d.CategoryFoods.length) {
              return (
                <OneTypeFoods
                  key={d.Category._id}
                  foods={d.CategoryFoods}
                  categoryName={d.Category.categoryName}
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
