import { NextRequest, NextResponse } from "next/server";
import db from "@libs/db";

export const revalidate = 10;

export async function GET() {
  const findUsers = await db.users.findMany();
  return NextResponse.json(findUsers, { status: 200 });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("body : ", body);

  const regReturn = await db.users
    .create({
      data: {
        ...body,
        age: +body.age,
      },
    })
    .catch((error) => Promise.reject(error));

  return NextResponse.json(regReturn, { status: 200 });
}
