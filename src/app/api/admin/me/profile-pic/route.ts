import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@/app/generated/prisma";
import { verify } from "jsonwebtoken";

export async function PUT(req: NextRequest) {
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

		const body = await req.json();

		if (!body.image) {
			return NextResponse.json(
				{ message: "Profile pic is required." },
				{
					status: 400,
				}
			);
		}

		const updatedUser = await prisma.user.update({
			where: { id: user.id },
			data: {
				profilePicture: body.image,
			},
		});

		return NextResponse.json(
			{ message: "Profile pic is updated 😎.", updatedUser },
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "An error occurred!" },
			{ status: 500 }
		);
	}
}
