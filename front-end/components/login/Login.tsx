import { EyeOff } from "lucide-react";

export const Login = () => {
  return (
    <form className="flex flex-col p-8 gap-12 rounded-2xl w-[448px] m-auto">
      <p className="text-center leading-8 text-3xl">Нэвтрэх</p>
      <fieldset className="relative flex flex-col gap-2 pb-2 w-full">
        <label htmlFor="email" className="flex flex-col gap-1">
          Имэйл
          <input
            type="email"
            placeholder="Имэйл хаягаа оруулна уу"
            className="login-input"
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-1 relative">
          <p>Нууц үг</p>
          <input
            type="password"
            placeholder="Нууц үг"
            className="login-input"
          />
          <EyeOff className="absolute top-[50%] right-4" />
        </label>
        <p className="absolute  right-0 -bottom-5 text-[#3F4145]">
          Нууц үг сэргээх
        </p>
      </fieldset>
      <fieldset className="flex flex-col gap-8 ">
        <button className="login-button  bg-[#f7f7f8] text-[#1C20243D]">
          Нэвтрэх
        </button>
        <p className="text-center">Эсвэл</p>
        <button className="login-button border border-[#18BA51]">
          Бүртгүүлэх
        </button>
      </fieldset>
    </form>
  );
};
