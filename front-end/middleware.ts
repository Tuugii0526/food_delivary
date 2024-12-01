import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
let thisEnvironmentToken: string | undefined;
export default async function Middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (thisEnvironmentToken != token) {
    thisEnvironmentToken = token;
    cookieStore.set("CHANGED", "1");
  } else {
    cookieStore.set("CHANGED", "0");
  }
  return NextResponse.next();
}
