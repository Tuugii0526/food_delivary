"use client";

import { Eye, EyeOff } from "lucide-react";
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
import { useState } from "react";
import { useCheckFormInputs } from "@/lib/customHooks";
import { toast } from "sonner";
import { login } from "@/lib/actions";
export function Login({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [canSee, setCanSee] = useState(false);
  const { correct, onChange } = useCheckFormInputs();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/login`, {
        method: "post",
        body: formData,
      });
      if (res.ok) {
        const { token, exp } = await res.json();
        const expiresAt = new Date(exp * 1000).toUTCString();
        document.cookie = `token=${token};expires=${expiresAt};Samesite=Lax;Secure;`;
        toast("You have successfully logged in.");
        login();
      } else {
        const { message } = await res.json();
        toast(`${message}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="user-nav" asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex justify-center">
        <form
          className="flex flex-col p-8 gap-12 rounded-2xl w-[448px] "
          onSubmit={onSubmit}
          onChange={onChange}
        >
          <DialogHeader>
            <DialogTitle className="font-bold text-3xl text-center">
              Нэвтрэх
            </DialogTitle>
          </DialogHeader>
          <div className="relative flex flex-col gap-2 pb-2 w-full">
            <label htmlFor="email" className="flex flex-col gap-1">
              Имэйл
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Имэйл хаягаа оруулна уу"
                className="login-input"
                required
              />
            </label>
            <label htmlFor="password" className="flex flex-col gap-1 relative">
              <p>Нууц үг</p>
              <input
                type={canSee ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Нууц үг"
                className="login-input text-black"
                required
              />

              <button
                onClick={() => {
                  setCanSee((pre) => !pre);
                }}
                type="button"
              >
                {canSee ? (
                  <Eye className="absolute top-[50%] right-4" />
                ) : (
                  <EyeOff className="absolute top-[50%] right-4" />
                )}
              </button>
            </label>

            <DialogClose asChild>
              <Link
                href={"/renew-pass"}
                className="absolute  right-0 -bottom-5 text-[#3F4145]"
              >
                Нууц үг сэргээх
              </Link>
            </DialogClose>
          </div>
          <div className="flex flex-col gap-8 ">
            <DialogClose asChild>
              <button
                className={`login-button   text-[#1C2024] bg-[#f7f7f8] ${
                  correct ? "bg-green-400" : "cursor-not-allowed"
                }`}
                type="submit"
              >
                Нэвтрэх
              </button>
            </DialogClose>
            <p className="text-center">Эсвэл</p>
            <DialogClose asChild>
              <Link
                href={"/sign-up"}
                className="login-button border border-[#18BA51]"
              >
                Бүртгүүлэх
              </Link>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
