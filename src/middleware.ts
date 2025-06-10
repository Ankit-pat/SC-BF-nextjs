import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { COOKIES } from "./common/constant";

export default async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const response = NextResponse.next();

  response.cookies.set(COOKIES.WEBUSER, search);
  return response
}

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"], // Adjust this as per your locales
};
