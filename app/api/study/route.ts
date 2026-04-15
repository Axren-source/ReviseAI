import { NextResponse } from "next/server";
import { generateStudyPack } from "@/lib/mock-study";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { notes?: string };
    const notes = body.notes ?? "";

    const studyPack = generateStudyPack(notes);

    return NextResponse.json(studyPack);
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Provide notes as text." },
      { status: 400 },
    );
  }
}
