import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
//  token looks like this {
//   name: 'joe',
//   email: 'joe@j0e.joe',
//   sub: '664ca66e6809b85b6dbeb5bd',
//   iat: 1716299892,
//   exp: 1718891892,
//   jti: '5083842c-82bf-4ca6-beeb-d03aa7496132'
// } 

  //console.log("path===>", path, " token===>", token, " req===>", req);
  
  const publicPaths = path === "/" || path === "/signup";

  if (publicPaths && token) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }
  if (!publicPaths && !token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/signup", "/dashboard"], // list protected routes
};
