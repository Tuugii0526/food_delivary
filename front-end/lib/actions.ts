"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
// import { revalidatePath } from "next/cache";
// import { cookies } from "next/headers";
// import { cache } from "react";
// export const verifySession = cache(async () => {
//   const changed = (await cookies()).get("CHANGED")?.value;
//   if (changed == "1") {
//     revalidatePath("/", "layout");
//   }
// });
export async function getTokenOnServer() {
  return (await cookies()).get("token")?.value;
}
export async function deleteToken() {
  (await cookies()).delete("token");
  revalidatePath("/", "layout");
}
export async function login() {
  revalidatePath("/", "layout");
}
export async function refresh() {
  revalidatePath("/");
}
