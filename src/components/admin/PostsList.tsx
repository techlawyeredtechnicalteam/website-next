"use client";
import React, { useEffect, useState } from "react";
import SearchPost from "../shared/admin/SearchPost";
import AppButton from "../shared/AppButton";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ApiInstance } from "@/utils/api-instance";
import { User } from "../shared/providers/RootProvider";
import { formatDistanceToNow } from "date-fns";
import PostsPlaceholder from "./PostsPlaceholder";
import { useRootStore } from "../shared/providers/RootProvider";
import Pagination from "../shared/Pagination";
import useAlert from "@/hooks/useAlert";
import axios, { AxiosError } from "axios";
import AppLoader from "../shared/AppLoader";
import { motion } from "framer-motion";
import Profile from "./Profile";
import DeletePost from "./DeletePost";

export interface Post {
	title: string;
	body: string;
	published: boolean;
	author: User;
	image: string;
	createdAt: Date;
	id: string;
}

export default function PostsList() {
	const { user } = useRootStore();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");

	const hasProfilePic =
		user?.profilePicture !== undefined && user?.profilePicture !== null;

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
				`/api/admin/posts?page=${currentPage}&q=${search}`
			);

			return res.data;
		},
		retry: false,
		gcTime: 0,
		enabled: hasProfilePic,
	});

	return hasProfilePic ? (
		<>
			<div className="flex flex-col gap-y-5 md:flex-row items-center justify-between pb-5 border-b border-b-[#c6c6c6] w-full">
				<SearchPost
					setSearch={(val) => {
						setSearch(val);
					}}
					background="#f5f5f5"
				/>
				<Link className="w-full md:w-max" href={"/admin/create-post"}>
					<AppButton className="!bg-primary !text-white px-[20px] !w-full md:w-max">
						<span>Create Post</span>
					</AppButton>
				</Link>
			</div>
			<div className="mt-8 w-full flex flex-col gap-6">
				{(isLoading || isFetching) &&
					[1, 2, 3, 4, 5].map((d, i) => <PostsPlaceholder key={i} />)}
				{!isLoading &&
					!isFetching &&
					data &&
					data.posts.length > 0 &&
					data?.posts.map((d, i) => (
						<div key={i} className="border-[#d6d6d6] border rounded-2xl p-5">
							<div className="flex flex-col md:flex-row gap-y-3 md:items-center justify-between mb-3">
								<div className="flex items-center gap-3">
									<Image
										width={300}
										height={300}
										className="w-[50px] h-[50px] rounded-full object-cover"
										src={
											d.author.profilePicture
												? d.author.profilePicture
												: "/no-profile.png"
										}
										alt="Techlawyered"
									/>
									<div className="flex flex-col gap-1">
										<span className="text-2xl font-medium">
											{d.author.fullName}
										</span>
										<span className="text-xl font-medium text-[#787878]">
											{formatDistanceToNow(new Date(d.createdAt), {
												addSuffix: true,
											})}
										</span>
									</div>
								</div>
								<span className="w-max text-xl font-medium bg-green-200 flex items-center justify-center p-3 rounded-full text-green-600">
									Published
								</span>
							</div>
							<h5 className="line-clamp-3 text-[1.7rem] md:text-[2rem] font-semibold">
								{d.title}
							</h5>
							<div className="flex items-center gap-5 mt-5">
								<Link href={`/admin/edit-post/${d.id}`}>
									<AppButton classname="!bg-transparent !text-primary border border-primary px-[20px]">
										<span>Edit Post</span>
									</AppButton>
								</Link>
								<DeletePost
									post={d}
									refetch={() => {
										refetch();
									}}
								/>
							</div>
						</div>
					))}

				{(!isLoading || isFetching) && data && data.posts.length === 0 && (
					<div className=" pb-20 flex flex-col items-center justify-center">
						<Image
							width={300}
							height={300}
							className="w-[300px] h-[300px] object-cover"
							src={"/no-posts.png"}
							alt="Techlawyered"
						/>
						<p className="my-5 w-[70%] text-3xl text-center text-gray-500">
							Nothing here yet 👀 Start the story!
						</p>
						<Link href={"/admin/create-post"}>
							<AppButton className="!bg-[#f5f5f5] !text-primary px-[20px]">
								<span>Create Post</span>
							</AppButton>
						</Link>
					</div>
				)}

				{(!isLoading || isFetching) && data && data.posts.length > 0 && (
					<div className="w-full">
						<Pagination
							totalPages={data?.pagination.totalPages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				)}
			</div>
		</>
	) : (
		<>
			<div className="min-h-[300px] flex flex-col justify-center items-center">
				<Profile />
			</div>
		</>
	);
}
