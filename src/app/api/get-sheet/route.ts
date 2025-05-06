"use server";

import { NextResponse } from "next/server";

export const dynamic = 'force-static';

export async function GET() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EVENT_API}?id=${process.env.NEXT_PUBLIC_SHEET_ID}&sheet=${process.env.NEXT_PUBLIC_SHEER_NAME}`
  );

  const data = await response.json();

  return NextResponse.json(data);
}
