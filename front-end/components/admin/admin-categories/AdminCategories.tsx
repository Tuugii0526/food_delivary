"use client";

import { useBeAwareContext } from "@/components/context/ContextProvider";
import { AdminCategory } from "./AdminCategory";

export const AdminCategories = () => {
  const { categoryResponse } = useBeAwareContext();
  return (
    <>
      {categoryResponse.success ? (
        <p className="text-red-600">{categoryResponse.message}</p>
      ) : categoryResponse.categories.length ? (
        categoryResponse.categories.map((category) => (
          <AdminCategory key={category._id} category={category} />
        ))
      ) : (
        <p>No data</p>
      )}
    </>
  );
};
