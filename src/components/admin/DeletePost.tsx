"use client";

import React, { useState } from "react";
import AppButton from "../shared/AppButton";
import { useRootStore } from "../shared/providers/RootProvider";
import useAlert from "@/hooks/useAlert";
import { Post } from "./PostsList";
import { ApiInstance } from "@/utils/api-instance";
import { AxiosError } from "axios";
import AppLoader from "../shared/AppLoader";

export default function DeletePost({
	post,
	refetch,
}: {
	post: Post;
	refetch: () => void;
}) {
	const { showAndHideAlert } = useAlert();
	const [deleting, setDeleting] = useState(false);

	async function deletePostHandler(id: string) {
		try {
			setDeleting(true);

			const postRes = await ApiInstance.delete("/api/admin/posts/" + id);

			showAndHideAlert({
				message: postRes.data.message,
				type: "success",
			});

			setDeleting(false);
			refetch();
		} catch (error) {
			const err = error as AxiosError<any>;

			showAndHideAlert({
				message: err.response?.data.message ?? err.message,
				type: "error",
			});
			setDeleting(false);
		}
	}
	return (
		<AppButton
			onClick={() => {
				deletePostHandler(post.id);
			}}
			classname="!bg-red-400 !text-white px-[20px]">
			{deleting ? (
				<AppLoader width="3rem" height="3rem" border="0.3rem" />
			) : (
				<span>Delete Post</span>
			)}
		</AppButton>
	);
}
