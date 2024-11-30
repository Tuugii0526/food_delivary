import { z } from "zod";
export const SignupFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name should be at least 2 characters long" })
      .trim(),
    email: z.string().email({ message: "Please enter a valid email" }).trim(),
    address: z.string().min(1, { message: "Please fill this field" }),
    password: z
      .string()
      .min(8, { message: "At least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
      .regex(/[0-9]/, { message: "Contain at least one number" })
      .regex(/[^a-z0-9]/i, {
        message: "Contain at least one special character",
      })
      .trim(),
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords must match", // Custom error message
    path: ["rePassword"], // Highlight the 'repassword' field in case of error
  });

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(2, { message: "Should be at least 2 characters long" }),
});
