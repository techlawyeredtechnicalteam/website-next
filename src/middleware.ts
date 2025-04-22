import { NextRequest, NextResponse } from "next/server";
import { getTokens } from "./utils/cookies";
import { verify } from "jsonwebtoken";
import { headers } from "next/headers";
import { ApiInstance } from "./utils/api-instance";
import { AxiosError } from "axios";

export async function middleware(request: NextRequest) {
	// Middleware logic goes here
	const pathname = request.nextUrl.pathname;
	const isApiRoute = pathname.startsWith("/api");
	const isAdminUIRoute = pathname.startsWith("/admin");

	// if (isApiRoute) {
	// 	try {
	// 		if (pathname !== "/api/admin/login" && pathname !== "/api/admin/signup") {
	// 			const accessToken = request.headers.get("accessToken");
	// 			if (!accessToken) {
	// 				throw new Error("Unathorized!");
	// 			}

	// 			return NextResponse.next();
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		return NextResponse.json(
	// 			{ message: "Unauthorized" },
	// 			{
	// 				status: 401,
	// 			}
	// 		);
	// 	}
	// }

	if (isAdminUIRoute) {
		const isAuthRoute = pathname === "/admin/auth";
		try {
			const { accessToken } = await getTokens();
			console.log(accessToken, "admin");
			await ApiInstance.get("/api/admin/me");
			if (isAuthRoute) {
				return NextResponse.redirect(new URL("/admin", request.url));
			}
			return NextResponse.next();
		} catch (error: any) {
			console.log(error?.response.data);
			if (!isAuthRoute) {
				return NextResponse.redirect(new URL("/admin/auth", request.url));
			} else {
				return NextResponse.next();
			}
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/api/admin/:path*", "/admin/:path*"],
};
