// @ts-ignore
import {
	S3Client,
	PutObjectCommand,
	GetObjectCommand,
} from "@aws-sdk/client-s3";
import { PutObjectCommandInput } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { prisma } from "@/utils/prisma";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import ShortUniqueId from "short-unique-id";

// Initialize S3 client
const s3 = new S3Client({
	region: process.env.BUCKET_REGION,
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID!,
		secretAccessKey: process.env.SECRET_ACCESS_KEY!,
	},
});

const getUploadURL = async (key: string, contentType: string) => {
	const params: PutObjectCommandInput = {
		Bucket: process.env.BUCKET_NAME!,
		Key: key,
		ContentType: contentType,
		ACL: "public-read",
	};

	const command = new PutObjectCommand(params);
	const url = await getSignedUrl(s3, command, { expiresIn: 60 });

	return url;
};

export async function POST(req: Request) {
	const accessToken = req.headers.get("accessToken");

	const payload: any = verify(accessToken ?? "", process.env.JWT_SECRET ?? "");

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

	if (!body.contentType) {
		return NextResponse.json(
			{ message: "Content Type is required." },
			{
				status: 400,
			}
		);
	}

	const { randomUUID } = new ShortUniqueId({
		dictionary: "hex",
		length: 16,
	});

	const fileExtension = body.contentType.split("/")[1];
	const key = `website/images/${randomUUID()}.${fileExtension}`;
	const s3BucketBaseURL = `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/`;

	const url = await getUploadURL(key, body.contentType);

	return NextResponse.json(
		{ url, key: `${s3BucketBaseURL}${key}` },
		{
			status: 200,
		}
	);
}
