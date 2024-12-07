"use client";

import { FoodCategoryType } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import { AdminCategoryEdit } from "./AdminCategoryEdit";
import clsx from "clsx";
import { ChangeEvent, useState, useTransition } from "react";
import { useAdminContext } from "@/components/context/AdminContext";
import { Label } from "@radix-ui/react-dropdown-menu";
export const AdminCategory = ({ category }: { category: FoodCategoryType }) => {
  const { curt, setCurt } = useAdminContext();
  const [_, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState(category.categoryName);
  return (
    <div
      className={clsx(
        "w-full  py-2 px-4 rounded-lg flex justify-between border border-[#D6D8DB]",
        {
          "bg-green-500": curt._id == category._id,
        }
      )}
      onClick={() => {
        startTransition(() => {
          setCurt(category);
        });
      }}
    >
      {isEditing ? (
        <label htmlFor="edit" className="w-full rounded-md ">
          <textarea
            id="edit"
            name="edit"
            value={categoryName}
            className="w-full h-fit text-wrap"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setCategoryName(e.target.value);
            }}
          />
        </label>
      ) : (
        <p>{categoryName}</p>
      )}
      <AdminCategoryEdit
        category={category}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      >
        <EllipsisVertical />
      </AdminCategoryEdit>
    </div>
  );
};
