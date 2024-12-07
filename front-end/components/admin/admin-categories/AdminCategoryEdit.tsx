"use client";

import { useAdminContext } from "@/components/context/AdminContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  //   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { refresh } from "@/lib/actions";
import { FoodCategoryType } from "@/lib/types";
import { getToken } from "@/lib/utils";
import { PenLine, Trash2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
export const AdminCategoryEdit = ({
  children,
  category,
  isEditing,
  setIsEditing,
  categoryName,
  setCategoryName,
}: {
  children: React.ReactNode;
  category: FoodCategoryType;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  categoryName: string;
  setCategoryName: (value: string) => void;
}) => {
  const { editCategoryName } = useAdminContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex  py-2 px-4 gap-4"
          onClick={async () => {
            if (isEditing) {
              if (category.categoryName == categoryName) {
                toast("There is no change");
                setIsEditing(false);
                return;
              }
              const res = await fetch(
                `${process.env.NEXT_PUBLIC_DATABASE_URL}/category?id=${category._id}`,
                {
                  method: "put",
                  headers: {
                    Authorization: getToken(),
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ categoryName }),
                }
              );
              if (res.ok) {
                editCategoryName(category._id, categoryName);
                toast(`You have successfull edited a category`);
              } else {
                if (res.status == 401) {
                  toast("Please log in");
                } else {
                  const { error } = await res.json();
                  toast(`Failed to edit a category: ${error}`);
                }
                setCategoryName(category.categoryName);
              }
              setIsEditing(false);
              return;
            }
            setIsEditing(true);
          }}
        >
          <PenLine />
          <p>{isEditing ? "Save" : "Edit"}</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex  py-2 px-4 gap-4 text-[#DF1F29]"
          onClick={async () => {
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_DATABASE_URL}/category?id=${category._id}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: getToken(),
                },
              }
            );
            if (res.status == 200) {
              toast("You have successfull deleted a category");
              await refresh();
              return;
            }
            if (res.status == 401) {
              toast("Unauthorized. So log in");
              return;
            }
            if (res.status == 404) {
              toast("Item not found");
              return;
            }
            if (res.status == 500) {
              const { error } = await res.json();
              toast(`Failed to delete a category:`, error);
            }
          }}
        >
          <Trash2 />
          <p>Delete Category</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
