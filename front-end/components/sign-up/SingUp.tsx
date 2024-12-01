"use client";

import React, { ChangeEvent, useState } from "react";
import { PasswordCheck } from "../shared-components/PasswordCheck";
import { isPasswordCorrect } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCheckFormInputs } from "@/lib/customHooks";
export const SignUp = () => {
  const { correct, onChange } = useCheckFormInputs();
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRepassword] = useState<string>("");
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== rePassword) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/user`, {
        method: "post",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        toast("You have successfull created an account");
        router.push("/");
      } else {
        toast(`Failed to create an account .${data.message}`);
      }
    } catch (error) {
      console.log("Iam workings the catchtry");
      throw new Error(`${error}`);
    }
  };
  return (
    <form
      className="flex flex-col p-8 gap-12 rounded-2xl w-[448px] m-auto mb-10"
      onSubmit={onSubmit}
      onChange={onChange}
    >
      <p className="font-bold text-3xl text-center">Бүртгүүлэх</p>
      <fieldset className="relative flex flex-col gap-2 pb-2 w-full">
        <label htmlFor="name" className="flex flex-col gap-1">
          Нэр
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Нэрээ оруулна уу"
            className="login-input"
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-1">
          Имэйл
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Имэйл хаягаа оруулна уу"
            className="login-input"
            required
          />
        </label>
        <label htmlFor="password" className="w-full flex flex-col gap-1 ">
          <p>Нууц үг</p>
          <PasswordCheck password={password} setPassword={setPassword} />
        </label>

        <label htmlFor="rePassword" className="flex flex-col gap-1 ">
          <p>Нууц үг давтах</p>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            placeholder="Нууц үгээ давтан оруулна уу"
            className={`login-input`}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setRepassword(e.target.value);
            }}
          />
          {isPasswordCorrect(password) && password !== rePassword && (
            <p className="text-red-600">Passwords are not matched</p>
          )}
        </label>
      </fieldset>
      <fieldset className="flex flex-col gap-8 ">
        <label htmlFor="serviceContract" className=" flex gap-2">
          <input type="checkbox" name="serviceContract" required />
          <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
        </label>
        <button
          className={`login-button border border-[#18BA51] ${
            correct ? " bg-green-500" : ""
          } `}
          type="submit"
          onClick={() => {
            router.push("/");
          }}
        >
          Бүртгүүлэх
        </button>
      </fieldset>
    </form>
  );
};
