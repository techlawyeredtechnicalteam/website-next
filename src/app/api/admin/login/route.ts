import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import { prisma } from "@/utils/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const schema = Yup.object().shape({
	email: Yup.string().required(),
	password: Yup.string().required(),
});

export async function POST(req: Request, res: Response) {
	try {
		const body = await req.json();

		const validatedFields = await schema.validate(body, {
			abortEarly: false,
		});
		const { email, password } = validatedFields;

		const user = await prisma.user.findUnique({ where: { email } });

		if (!user) {
			return NextResponse.json(
				{ message: "User not found." },
				{
					status: 404,
				}
			);
		}

		const passwordIsValid = await compare(password, user.password);
		if (!passwordIsValid) {
			return NextResponse.json(
				{ message: "Invalid Credentials" },
				{
					status: 400,
				}
			);
		}

		const token = sign({ email: user.email }, process.env.JWT_SECRET ?? "", {
			expiresIn: "24h",
		});

		return NextResponse.json(
			{ message: "Logged In Successfully", token, user },
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
