import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import { prisma } from "@/utils/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

const schema = Yup.object().shape({
	email: Yup.string().required(),
	password: Yup.string().required(),
	fullName: Yup.string().required(),
});

export async function POST(req: Request, res: NextApiResponse) {
	try {
		const body = await req.json();
		const validatedFields = await schema.validate(body, {
			abortEarly: false,
		});
		const { email, password, fullName } = validatedFields;

		const existingUser = await prisma.user.findUnique({ where: { email } });

		if (existingUser) {
			return NextResponse.json(
				{ message: "User already exist." },
				{ status: 400 }
			);
		}

		const hashedPassword = await hash(password, 10);

		await prisma.user.create({
			data: {
				fullName,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json(
			{ message: "New User Created. You can login now 🎉" },
			{ status: 201 }
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
