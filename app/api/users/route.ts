import { NextResponse } from "next/server";

import db from "@libs/db";

export async function GET() {
  const findUsers = await db.users.findMany();

  console.log("findUsers :", findUsers);

  return NextResponse.json(findUsers);
}
