import { EyeOff } from "lucide-react";
export const SignUp = () => {
  return (
    <form className="flex flex-col p-8 gap-12 rounded-2xl w-[448px] m-auto mb-10 ">
      <p className="font-bold text-3xl text-center">Бүртгүүлэх</p>
      <fieldset className="relative flex flex-col gap-2 pb-2 w-full">
        <label htmlFor="name" className="flex flex-col gap-1">
          Нэр
          <input
            type="text"
            id="name"
            placeholder="Нэрээ оруулна уу"
            className="login-input"
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-1">
          Имэйл
          <input
            type="email"
            id="email"
            placeholder="Имэйл хаягаа оруулна уу"
            className="login-input"
          />
        </label>
        <label htmlFor="address" className="flex flex-col gap-1">
          Хаяг
          <input
            type="text"
            id="address"
            placeholder="Та хаягаа оруулна уу"
            className="login-input"
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-1 ">
          <p>Нууц үг</p>
          <input
            type="password"
            id="password"
            placeholder="Нууц үг оруулна уу"
            className="login-input"
          />
          <EyeOff className="absolute top-[50%] right-4" />
        </label>
        <label htmlFor="rePassword" className="flex flex-col gap-1 ">
          <p>Нууц үг давтах</p>
          <input
            type="password"
            id="rePassword"
            placeholder="Нууц үг оруулна уу"
            className="login-input"
          />
          <EyeOff className="absolute top-[50%] right-4" />
        </label>
      </fieldset>
      <fieldset className="flex flex-col gap-8 ">
        <label htmlFor="serviceContract" className=" flex gap-2">
          <input type="checkbox" />
          <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
        </label>
        <button className="login-button border border-[#18BA51]">
          Бүртгүүлэх
        </button>
      </fieldset>
    </form>
  );
};
