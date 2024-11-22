import {
  Dialog,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { History, LogOutIcon, Mail, Pencil, Phone, User } from "lucide-react";
import { UserInfo } from "./UserInfo";
export function UserProfile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex justify-center">
        <form className="flex flex-col p-8 gap-6 rounded-2xl w-fit ">
          <DialogHeader className="flex flex-col gap-10 items-center justify-between">
            <div className="w-[120px] h-[120px] rounded-full bg-slate-200 relative">
              <div className="absolute bg-white rounded-full -bottom-4 -right-2 p-2 text-[#18BA51] border border-[#D6D8DB]">
                <Pencil />
              </div>
            </div>
            <DialogTitle>Хүрэлсүх</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col px-5 pt-4 pb-0 gap-4">
            <UserInfo
              icon={<User />}
              description="Таны нэр"
              property="Хүрэлсүх"
            />
            <UserInfo
              icon={<Phone />}
              description="Утасны дугаар"
              property="99110001"
            />
            <UserInfo
              icon={<Mail />}
              description="Имэйл хаяг"
              property="khurelsukh1234@gmail.com"
            />
            <div className="flex items-center gap-2 py-2 px-5 rounded-sm">
              <div className="p-2 rounded-full bg-white ">
                <History />
              </div>
              <p>Захиалгын түүх</p>
            </div>
            <div className="flex items-center gap-2 py-2 px-5 rounded-sm">
              <div className="p-2 rounded-full bg-white ">
                <LogOutIcon />
              </div>
              <p className="">Гарах</p>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}