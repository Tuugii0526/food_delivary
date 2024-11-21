"use client";

import { EyeOff } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
export function Login({
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
        <form className="flex flex-col p-8 gap-12 rounded-2xl w-[448px] ">
          <DialogHeader>
            <DialogTitle className="font-bold text-3xl text-center">
              Нэвтрэх
            </DialogTitle>
          </DialogHeader>
          <fieldset className="relative flex flex-col gap-2 pb-2 w-full">
            <label htmlFor="email" className="flex flex-col gap-1">
              Имэйл
              <input
                type="email"
                id="email"
                placeholder="Имэйл хаягаа оруулна уу"
                className="login-input"
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-1 relative">
              <p>Нууц үг</p>
              <input
                type="password"
                id="password"
                placeholder="Нууц үг"
                className="login-input"
              />
              <EyeOff className="absolute top-[50%] right-4" />
            </label>

            <DialogClose asChild>
              <Link
                href={"/renew-pass"}
                className="absolute  right-0 -bottom-5 text-[#3F4145]"
              >
                Нууц үг сэргээх
              </Link>
            </DialogClose>
          </fieldset>
          <fieldset className="flex flex-col gap-8 ">
            <button className="login-button  bg-[#f7f7f8] text-[#1C20243D]">
              Нэвтрэх
            </button>
            <p className="text-center">Эсвэл</p>
            <DialogClose asChild>
              <Link
                href={"/sign-up"}
                className="login-button border border-[#18BA51]"
              >
                Бүртгүүлэх
              </Link>
            </DialogClose>
          </fieldset>
        </form>
      </DialogContent>
    </Dialog>
  );
}
