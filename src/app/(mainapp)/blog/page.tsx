import BlogLists from "@/components/blog/BlogLists";
import JournalCard from "@/components/shared/JournalCard";
import Pagination from "@/components/shared/Pagination";
import React from "react";

export default function page() {
	async function doSomethng() {
		"use server";
	}

	return (
		<main>
			<section className="bg-bgBlack h-[250px] flex items-center justify-center">
				<h1 className="text-[3rem] md:text-[4rem] font-bold text-white">
					Our Blog
				</h1>
			</section>
			<section className="py-[30px] px-[15px] md:px-[40px]">
				<BlogLists />
			</section>
		</main>
	);
}
