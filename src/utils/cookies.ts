"use server";
import { cookies } from "next/headers";

export const setTokens = async (access: string) => {
	const cookieStore = await cookies();
	cookieStore.set("tlatk", access);
};

export const getTokens = async () => {
	const cookieStore = await cookies();
	const access = cookieStore.get("tlatk");

	return { accessToken: access?.value };
};

export async function estimateReadingTime(
	htmlContent: string,
	wordsPerMinute = 200
) {
	// Strip HTML tags
	const text = htmlContent.replace(/<[^>]*>/g, " ").trim();

	// Count words
	const wordCount = text.split(/\s+/).length;

	// Calculate time
	const minutes = Math.ceil(wordCount / wordsPerMinute);

	return `${minutes} min read`;
}
