import { NextRequest, NextResponse } from "next/server";
import db from "@libs/db";

export const revalidate = 10;

export async function GET() {
  try {
    const findUsers = await db.users.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(findUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const regReturn = await db.users
      .create({
        data: {
          ...body,
          age: +body.age,
        },
      })
      .catch((error) => Promise.reject(error));

    return NextResponse.json(regReturn, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
