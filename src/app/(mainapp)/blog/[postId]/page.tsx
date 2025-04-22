import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import TwitterXIcon from "@/components/shared/icons/TwitterXIcon";
import { ApiInstance } from "@/utils/api-instance";
import { Post } from "@/components/admin/PostsList";
import { estimateReadingTime } from "@/utils/cookies";

export default async function page({
	params,
}: {
	params: Promise<{ postId: string }>;
}) {
	const { postId } = await params;

	let post: Post | null | undefined = undefined;

	try {
		const res = await ApiInstance.get("/api/admin/posts/" + postId);
		post = res.data.post;
	} catch (error) {
		post = null;
	}

	let readTime = "";

	if (post) {
		readTime = await estimateReadingTime(post?.body);
	}

	return post ? (
		<>
			<section className="flex items-center justify-center py-[30px]">
				<div className="w-[95%] md:w-[80%] lg:w-[60%] pb-[20px] border-b border-b-[#d2d2d2] flex flex-col md:flex-row md:items-center justify-between gap-y-10">
					<div className="flex items-center gap-[10px]">
						<Image
							src={post?.author.profilePicture ?? "/no-profile.png"}
							alt={post.author.fullName}
							width={500}
							height={500}
							className="w-[45px] h-[45px] rounded-full object-cover object-top"
						/>
						<div className="flex flex-col gap-y-2">
							<span className="text-[1.7rem] font-medium text-text-black">
								{post.author.fullName}
							</span>
							<span className="text-text-black text-2xl flex items-center gap-2">
								{new Date(post.createdAt).toLocaleDateString("en-Us", {
									month: "long",
									day: "2-digit",
									year: "numeric",
								})}{" "}
								<span className="w-[5px] h-[5px] rounded-full bg-primary flex"></span>{" "}
								{readTime}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-[33px]">
						<Link href={"#"}>
							<InstagramIcon className="fill-primary" />
						</Link>
						<Link href={"#"}>
							<FacebookIcon className="fill-primary" />
						</Link>
						<Link href={"#"}>
							<TwitterXIcon className="fill-primary" />
						</Link>
					</div>
				</div>
			</section>
			<section className="flex items-center justify-center">
				<div className="w-[95%] md:w-[80%] lg:w-[60%]">
					<Image
						className="w-full md:h-[400px] lg:h-[600px] object-cover object-top"
						width={900}
						height={600}
						alt="Seridan"
						src={post.image}
						priority={true}
					/>
				</div>
			</section>
			<section className="flex items-center justify-center py-[30px]">
				<div className="w-[95%] md:w-[80%] lg:w-[60%]">
					<h1 className="text-text-black font-bold text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[4.5rem]">
						{post.title}
					</h1>
					<article
						className="text-[1.7rem]"
						dangerouslySetInnerHTML={{ __html: post.body }}></article>
				</div>
			</section>
		</>
	) : (
		<></>
	);
}
