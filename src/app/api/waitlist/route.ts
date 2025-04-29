import { NextResponse } from "next/server";
import * as Yup from "yup";
import { prisma } from "@/utils/prisma";

const schema = Yup.object().shape({
	email: Yup.string().required(),
	fullName: Yup.string().required(),
	isLawyer: Yup.boolean().required(),
	yearsPostCall: Yup.number().optional(),
	phoneNumber: Yup.string().optional(),
	SCN: Yup.string().optional(),
});

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const validatedFields = await schema.validate(body, {
			abortEarly: false,
		});
		const { email, fullName, isLawyer, yearsPostCall, phoneNumber, SCN } =
			validatedFields;

		await prisma.waitlist.create({
			data: {
				email,
				phoneNumber,
				isLawyer,
				yearsPostCall,
				SCN,
				fullName,
			},
		});

		return NextResponse.json(
			{ message: "Thank you for joining the waitlist" },
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
			{ message: "An error occurred!", error },
			{ status: 500 }
		);
	}
}
