import CreatePost from "@/components/admin/create-post/CreatePost";
import AppButton from "@/components/shared/AppButton";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { ApiInstance } from "@/utils/api-instance";
import Link from "next/link";
import React from "react";

export default async function page({
	params,
}: {
	params: Promise<{ postId: string }>;
}) {
	const { postId } = await params;

	let post = undefined;

	try {
		const res = await ApiInstance.get("/api/admin/posts/" + postId);
		post = res.data.post;
	} catch (error) {
		post = null;
	}

	return (
		<main>
			{post ? (
				<section className="min-h-screen flex justify-center w-full h-full py-12">
					<div className="w-[95%] lg:w-[70%] xl:w-[50%]">
						<div className="flex items-center gap-5">
							<Link href={"/admin"}>
								<AppButton
									className="!bg-[#f5f5f5] px-[10px] !text-primary gap-3"
									fullyRounded>
									<span className="flex rotate-[90deg]">
										<ChevronIcon fill="#031e42" />
									</span>
									Go Back
								</AppButton>
							</Link>
							<h1 className="text-[3rem] font-bold">Create Post</h1>
						</div>
						<div className="mt-12 w-full bg-white drop-shadow-xl p-6 rounded-2xl border border-[#d6d6d6]">
							<CreatePost isEditing={true} post={post} />
						</div>
					</div>
				</section>
			) : (
				<section className="min-h-screen flex justify-center w-full h-full py-12">
					<div className="w-[50%]">
						<div className="flex items-center gap-5">
							<Link href={"/admin"}>
								<AppButton
									className="!bg-[#f5f5f5] px-[10px] !text-primary gap-3"
									fullyRounded>
									<span className="flex rotate-[90deg]">
										<ChevronIcon fill="#031e42" />
									</span>
									Go Back
								</AppButton>
							</Link>
							<h1 className="text-[3rem] font-bold">Edit Post</h1>
						</div>
						<div className="mt-12 w-full bg-white drop-shadow-xl p-6 rounded-2xl border border-[#d6d6d6]">
							<h1 className="text-3xl font-bold text-center text-[#787878]">
								Post Not Found
							</h1>
						</div>
					</div>
				</section>
			)}
		</main>
	);
}
