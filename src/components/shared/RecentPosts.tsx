"use client";
import JournalCard from "../shared/JournalCard";
import React, { useState } from "react";
import Pagination from "../shared/Pagination";
import { ApiInstance } from "@/utils/api-instance";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../admin/PostsList";
import Image from "next/image";
import PostsPlaceholder from "../admin/PostsPlaceholder";

export default function RecentPosts() {
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");

	const { data, isLoading, refetch, isFetching } = useQuery<{
		posts: Post[];
		pagination: {
			total: number;
			page: number;
			limit: number;
			totalPages: number;
		};
	}>({
		queryKey: ["posts", currentPage, search],
		queryFn: async () => {
			const res = await ApiInstance.get(
				`/api/admin/posts?page=${currentPage}&q=${search}&published=true`
			);

			return res.data;
		},
		retry: false,
		gcTime: 0,
	});

	return (
		<>
			<div className="w-full overflow-auto">
				<div className="w-full grid md:grid-cols-2 lg:w-[130%] xl:w-full lg:grid-cols-4 gap-[10px]">
					{(isLoading || isFetching) &&
						[1, 2, 3, 4].map((d, i) => (
							<PostsPlaceholder forWebsite={true} key={i} />
						))}
					{!isLoading &&
						!isFetching &&
						data &&
						data.posts.length > 0 &&
						data?.posts
							.slice(0, 4)
							.map((d, i) => <JournalCard post={d} key={i} />)}
				</div>
			</div>
			{(!isLoading || isFetching) && data && data.posts.length === 0 && (
				<div className="w-full pb-20 flex flex-col items-center justify-center">
					<Image
						width={300}
						height={300}
						className="w-[300px] h-[300px] object-cover"
						src={"/no-posts.png"}
						alt="Techlawyered"
					/>
					<p className="my-5 w-[70%] text-3xl text-center text-gray-500">
						No Posts yet. Check back later
					</p>
				</div>
			)}
		</>
	);
}
