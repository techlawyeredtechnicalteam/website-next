import CreatePost from "@/components/admin/create-post/CreatePost";
import AppButton from "@/components/shared/AppButton";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<main>
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
						<h1 className="text-[3rem] font-bold">Create Post</h1>
					</div>
					<div className="mt-12 w-full bg-white drop-shadow-xl p-6 rounded-2xl border border-[#d6d6d6]">
						<CreatePost isEditing={false} post={undefined} />
					</div>
				</div>
			</section>
		</main>
	);
}
