import { NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export async function GET(req: NextRequest) {
	try {
		const accessToken = req.headers.get("accessToken");

		const payload: any = verify(
			accessToken ?? "",
			process.env.JWT_SECRET ?? ""
		);

		const user = await prisma.user.findUnique({
			where: { email: payload.email },
		});

		if (!user) {
			return NextResponse.json(
				{ message: "Unauthenticated" },
				{
					status: 401,
				}
			);
		}

		return NextResponse.json(
			{ message: "User details retrieved", user },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "An error occurred!" },
			{
				status: 500,
			}
		);
	}
}
