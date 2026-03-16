import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, techs } = body;

    if (!name || !email || !company || !techs) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log the submission (in production, store in a database)
    console.log("Waitlist submission:", {
      name,
      email,
      company,
      techs,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Added to waitlist" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
