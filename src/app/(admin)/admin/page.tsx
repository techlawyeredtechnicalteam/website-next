import PostsList from "@/components/admin/PostsList";
import Profile from "@/components/admin/Profile";
import WelcomeText from "@/components/admin/WelcomeText";
import SearchPost from "@/components/shared/admin/SearchPost";
import AppButton from "@/components/shared/AppButton";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<main className="w-full">
			<section className="min-h-screen flex justify-center w-full py-12">
				<div className="w-[95%] lg:w-[70%] xl:w-[50%]">
					<div className="  flex items-center justify-between">
						<div>
							<WelcomeText />
						</div>
						<div className="shrink-0">
							<Profile forNewUser={false} />
						</div>
					</div>
					<div className="mt-12 w-full bg-white drop-shadow-xl p-3 md:p-6 rounded-2xl border border-[#d6d6d6]">
						<PostsList />
					</div>
				</div>
			</section>
		</main>
	);
}
