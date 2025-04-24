import { prisma } from "@/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    return NextResponse.json({ message: "User created", userId: user.id }, { status: 201 });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
