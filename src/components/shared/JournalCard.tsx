"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../admin/PostsList";
import { formatDistanceToNow } from "date-fns";

function estimateReadingTime(htmlContent: string, wordsPerMinute = 200) {
	// Strip HTML tags
	const text = htmlContent.replace(/<[^>]*>/g, " ").trim();

	// Count words
	const wordCount = text.split(/\s+/).length;

	// Calculate time
	const minutes = Math.ceil(wordCount / wordsPerMinute);

	return `${minutes} min read`;
}

export default function JournalCard({ post }: { post: Post }) {
	return (
		<Link href={`/blog/${post.id}`}>
			<div className="w-full rounded-2xl hover:bg-[#f5f5f5] p-6 transition-all duration-200">
				<Image
					src={post?.image}
					width={394}
					height={282}
					alt="LGFT"
					className="w-full h-[282px] object-cover object-top"
				/>
				<div className="w-full flex flex-col gap-y-[8px] mt-6">
					<h6 className="text-[2.2rem] font-bold text-text-black line-clamp-2">
						{post?.title}
					</h6>
					<span className="text-text-black text-2xl flex items-center gap-2">
						{new Date(post.createdAt).toLocaleDateString("en-Us", {
							month: "long",
							day: "2-digit",
							year: "numeric",
						})}{" "}
						<span className="w-[5px] h-[5px] rounded-full bg-primary flex"></span>{" "}
						{estimateReadingTime(post.body)}
					</span>
					<div className="flex items-center gap-[10px]">
						<Image
							src={post.author.profilePicture ?? "/no-profile.png"}
							alt="Seridan CEO"
							width={500}
							height={500}
							className="w-[45px] h-[45px] rounded-full object-cover object-top"
						/>
						<span className="text-[1.7rem] font-medium text-text-black">
							{post.author.fullName}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
