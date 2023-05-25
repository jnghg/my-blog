import { NextRequest, NextResponse } from "next/server";
import db from "@libs/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const findOne = await db.users.findUnique({
      where: {
        id: +params.id.toString(),
      },
    });
    return NextResponse.json(findOne, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
