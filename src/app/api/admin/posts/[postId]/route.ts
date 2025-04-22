import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@/app/generated/prisma";
import { verify } from "jsonwebtoken";

import * as Yup from "yup";

const schema = Yup.object().shape({
	title: Yup.string().required(),
	body: Yup.string().required(),
	image: Yup.string().required(),
	published: Yup.boolean().required(),
});

export async function PUT(
	req: NextRequest,
	{
		params,
	}: {
		params: Promise<{ postId: string }>;
	}
) {
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

		const postId = (await params).postId;

		if (!postId || postId === "") {
			return NextResponse.json(
				{ message: "Invalid Post Id" },
				{
					status: 400,
				}
			);
		}

		const body = await req.json();
		const validatedFields = await schema.validate(body, {
			abortEarly: false,
		});

		const updatedPost = await prisma.blog.update({
			where: { id: postId },
			data: validatedFields,
			include: {
				author: true,
			},
		});

		return NextResponse.json(
			{
				message: "Post Updated ✅",
				updatedPost,
			},
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return NextResponse.json(
				{
					message: "Validation failed",
					errors: error.errors,
				},
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: "An error occurred!" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	req: NextRequest,
	{
		params,
	}: {
		params: Promise<{ postId: string }>;
	}
) {
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

		const postId = (await params).postId;

		if (!postId || postId === "") {
			return NextResponse.json(
				{ message: "Invalid Post Id" },
				{
					status: 400,
				}
			);
		}

		const updatedPost = await prisma.blog.delete({
			where: { id: postId },
			include: {
				author: true,
			},
		});

		return NextResponse.json(
			{
				message: "Post Deleted",
				updatedPost,
			},
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return NextResponse.json(
				{
					message: "Validation failed",
					errors: error.errors,
				},
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: "An error occurred!" },
			{ status: 500 }
		);
	}
}

export async function GET(
	req: NextRequest,
	{
		params,
	}: {
		params: Promise<{ postId: string }>;
	}
) {
	try {
		const postId = (await params).postId;

		if (!postId || postId === "") {
			return NextResponse.json(
				{ message: "Invalid Post Id" },
				{
					status: 400,
				}
			);
		}

		const post = await prisma.blog.findUnique({
			where: { id: postId },
			include: {
				author: true,
			},
		});

		if (!post) {
			return NextResponse.json(
				{
					message: "Post Not Found",
					post,
				},
				{ status: 200 }
			);
		}

		return NextResponse.json(
			{
				post,
			},
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return NextResponse.json(
				{
					message: "Validation failed",
					errors: error.errors,
				},
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: "An error occurred!" },
			{ status: 500 }
		);
	}
}
