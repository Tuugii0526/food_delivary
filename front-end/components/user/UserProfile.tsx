import {
  Dialog,
  DialogClose,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { History, LogOutIcon } from "lucide-react";
import { UserInfo } from "./UserInfo";
import { ValidatedUserType } from "@/lib/types";
// import { deleteToken } from "@/lib/utils";
import { deleteToken } from "@/lib/actions";
import Link from "next/link";
import { userInfos } from "@/lib/data-all/CheckCategoryIcons";
import { poppins } from "@/app/fonts/fonts";
export function UserProfile({
  children,
  user,
}: {
  children: React.ReactNode;
  user: ValidatedUserType;
}) {
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex justify-center">
        <form className="flex flex-col  gap-2 rounded-2xl w-fit ">
          <DialogHeader className="flex flex-col gap-10 items-center justify-between">
            <div className="w-[120px] h-[120px] flex items-center justify-center border border-black rounded-full relative">
              <p
                className={`${poppins.className} font-extrabold leading-10 text-[80px] uppercase text-green-500`}
              >
                {user?.name ? user.name[0] : ""}
              </p>
            </div>
            <DialogTitle>{user?.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col px-5 pt-4 pb-0 gap-4">
            {userInfos.map((info) => (
              <UserInfo
                key={info?.id}
                icon={info.icon}
                description={info.description}
                property={info.property}
                user={user}
              />
            ))}
            <DialogClose asChild>
              <Link href={"/order-history"}>
                <div className="flex items-center gap-2 py-2 px-5 rounded-sm border   border-white hover:border-green-500">
                  <div className="p-2 rounded-full bg-white ">
                    <History />
                  </div>
                  <p>Захиалгын түүх</p>
                </div>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <button
                type="button"
                className="flex items-center gap-2 py-2 px-5 border  rounded-sm border-white hover:border-green-500 "
                onClick={async () => {
                  await deleteToken();
                }}
              >
                <div className="p-2 rounded-full bg-white ">
                  <LogOutIcon />
                </div>
                <p className="">Гарах</p>
              </button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
