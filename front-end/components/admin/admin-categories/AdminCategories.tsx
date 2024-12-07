"use client";

import { useAdminContext } from "@/components/context/AdminContext";
import { AdminCategory } from "./AdminCategory";

export const AdminCategories = () => {
  const { cts } = useAdminContext();
  if (!cts.length) {
    return <p>No data</p>;
  }
  return (
    <>
      {cts.map((category) => (
        <AdminCategory key={category._id} category={category} />
      ))}
    </>
  );
};
