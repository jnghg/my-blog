import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { createUser, getAllUsers } from "@libs/api/users";

export async function GET(request: NextRequest) {
  try {
    const result = await getAllUsers();
    if (!result) throw new Error(result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

/** 등록 */
export async function POST(request: NextRequest) {
  try {
    const tag = request.nextUrl.searchParams.get("tag") || "";
    revalidateTag(tag);

    const json = await request.json();
    const result = await createUser(json);
    if (!result) throw new Error(result);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
