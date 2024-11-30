import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, useState } from "react";

const checks = [
  {
    id: 1,
    checkName: "At least 8 characters long",
    regex: /.{8,}/,
  },
  {
    id: 2,
    checkName: "Contain at least one letter",
    regex: /[a-zA-Z]/,
  },
  {
    id: 3,
    checkName: "Contain at least one number",
    regex: /[0-9]/,
  },
  {
    id: 4,
    checkName: "Contain at least one special character",
    regex: /[^a-z0-9]/i,
  },
];
export const PasswordCheck = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (value: string) => void;
}) => {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <>
      <div className="w-full">
        <input
          type={seePassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Нууц үг оруулна уу"
          className="login-input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setSeePassword((pre) => !pre);
          }}
          className="ml-2"
        >
          {seePassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      {checks.map((check) => (
        <p
          key={check.id}
          className={clsx("text-red-600", {
            "text-green-600": check.regex.test(password),
          })}
        >
          {check.checkName}
        </p>
      ))}
    </>
  );
};
