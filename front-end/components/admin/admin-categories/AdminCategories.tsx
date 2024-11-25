"use client";

import { useBeAwareContext } from "@/components/context/ContextProvider";
import { AdminCategory } from "./AdminCategory";

export const AdminCategories = () => {
  const { categories, message } = useBeAwareContext();
  return (
    <>
      {message ? (
        <p className="text-red-600">{message}</p>
      ) : (
        categories.map((category) => (
          <AdminCategory key={category._id} category={category} />
        ))
      )}
    </>
  );
};
