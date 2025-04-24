import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    console.log("Email:", email);
    console.log("Password:", password);

    return NextResponse.json({ message: "Login successfully"},{ status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "Something went wrong" },{ status: 500 });
  }
}
