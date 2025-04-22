import Auth from "@/components/admin/auth/Auth";
import React from "react";

export default function page() {
	return (
		<main>
			<section className="h-screen flex items-center justify-center">
				<div className="w-[95%] lg:w-[60%] xl:w-[40%] drop-shadow-xl bg-white p-8 rounded-2xl">
					<Auth />
				</div>
			</section>
		</main>
	);
}
