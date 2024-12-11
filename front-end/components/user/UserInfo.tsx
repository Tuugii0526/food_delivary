"use client";
import { UserInfoType } from "@/lib/types";
import { Check, Pencil } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useBeAwareContext } from "../context/ContextProvider";
import { getToken } from "@/lib/utils";
import { toast } from "sonner";

export const UserInfo = ({
  icon,
  description,
  property,
  user,
}: UserInfoType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialValue: string = user ? user[property] || "" : "";
  const [value, setValue] = useState<string>(initialValue);
  const { editUser } = useBeAwareContext();
  if (!user) {
    return <p>No user data</p>;
  }
  return (
    <div
      className={`w-[300px] flex gap-2 py-2 px-5 bg-[#F6F6F6] border  rounded-sm border-white hover:border-green-500`}
    >
      {isEditing ? (
        <label className="w-full ">
          <input
            type="text"
            value={value}
            className="p-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value.trim());
            }}
          />
        </label>
      ) : (
        <div className=" flex gap-2">
          <div className="p-2 rounded-full bg-white ">{icon}</div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-[#888A99] text-xs font-normal leading-[14px]">
              {description}
            </p>
            <p className="text-base leading-[19px] text-[#0D1118] font-normal">
              {user[property]}
            </p>
          </div>
        </div>
      )}
      <button
        className="flex grow justify-end items-center text-[#18BA51]"
        type="button"
        onClick={async () => {
          if (isEditing) {
            if (value == initialValue) {
              setIsEditing(false);
              toast("There is no change");
              return;
            }
            setLoading(true);
            const res = await fetch(
              `${process.env.NEXT_PUBLIC_DATABASE_URL}/user?id=${user.userId}&${property}=${value}`,
              {
                method: "put",
                headers: {
                  Authorization: `${getToken()}`,
                },
              }
            );
            if (res.ok) {
              const { token, exp } = await res.json();
              const expiresAt = new Date(exp * 1000).toUTCString();
              document.cookie = `token=${token};expires=${expiresAt};Samesite=Lax;Secure;`;
              editUser(property, value);
              setLoading(false);
              toast("You have successfully updated");
            } else {
              setValue(initialValue);
              setLoading(false);
              toast("Failed to update");
            }
            setIsEditing((pre) => !pre);
          } else {
            setIsEditing((pre) => !pre);
          }
        }}
      >
        {loading ? <p>Saving ..</p> : isEditing ? <Check /> : <Pencil />}
      </button>
    </div>
  );
};
