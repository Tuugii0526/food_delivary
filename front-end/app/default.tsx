"use client";

import { useRouter } from "next/navigation";

export default function Default() {
  console.log("Iam working");
  const router = useRouter();
  router.replace("/");
}
