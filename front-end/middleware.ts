import { NextRequest, NextResponse } from "next/server";
export default async function Middleware(req: NextRequest) {
  return NextResponse.next();
}
