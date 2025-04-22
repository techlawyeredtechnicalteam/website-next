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

export async function POST(req: Request) {
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
		const validatedFields = await schema.validate(body, {
			abortEarly: false,
		});

		const newPost = await prisma.blog.create({
			data: {
				title: validatedFields.title,
				body: validatedFields.body,
				image: validatedFields.image,
				published: validatedFields.published,
				authorId: user.id,
			},
		});

		return NextResponse.json(
			{
				message: "Post Created  🎉",
				newPost,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
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

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;

		const page = Number(searchParams.get("page") || "1");
		const limit = Number(searchParams.get("limit") || "10");
		const skip = (page - 1) * limit;

		// Search and filter
		const query = searchParams.get("q") || "";
		const published = searchParams.get("published");

		const whereClause: Prisma.BlogWhereInput = {
			AND: [
				query
					? {
							OR: [
								{ title: { contains: query, mode: "insensitive" } },
								{ body: { contains: query, mode: "insensitive" } },
							],
					  }
					: {},
				published !== null ? { published: published === "true" } : {},
			],
		};

		const [posts, total] = await Promise.all([
			prisma.blog.findMany({
				where: whereClause,
				include: { author: true },
				skip,
				take: limit,
				orderBy: { createdAt: "desc" },
			}),
			prisma.blog.count({ where: whereClause }),
		]);

		return NextResponse.json(
			{
				posts,
				pagination: {
					total,
					page,
					limit,
					totalPages: Math.ceil(total / limit),
				},
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
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
