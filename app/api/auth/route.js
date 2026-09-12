import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "rashidbek";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "1012";

// GET /api/auth - Check authentication state
export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_session");

  if (token && token.value === "authenticated_secret_token_123") {
    return NextResponse.json({ authenticated: true, user: ADMIN_USERNAME });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

// POST /api/auth - Perform login
export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const response = NextResponse.json({
        success: true,
        message: "Muvaffaqiyatli tizimga kirildi!",
        user: ADMIN_USERNAME,
      });

      // Set cookie
      response.cookies.set("admin_session", "authenticated_secret_token_123", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Noto'g'ri login yoki parol!" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

// DELETE /api/auth - Perform logout
export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Tizimdan muvaffaqiyatli chiqildi.",
  });

  response.cookies.set("admin_session", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });

  return response;
}
