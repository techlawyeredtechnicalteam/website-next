"use client";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import useAlert from "@/hooks/useAlert";
import { ApiInstance } from "@/utils/api-instance";
import axios, { AxiosError } from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Switch from "@/components/shared/Switch";
import ImageIcon from "@/components/shared/icons/ImageIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import { Post } from "../PostsList";

const PostBody = dynamic(() => import("./PostBody"), {
	ssr: false,
});

const schema = Yup.object().shape({
	title: Yup.string().required(),
	body: Yup.string().required(),
	published: Yup.boolean().required(),
});

export interface PostData {
	title: string;
	body: string;
	published: boolean;
}

export default function CreatePost({
	isEditing,
	post,
}: {
	isEditing: boolean;
	post?: Post;
}) {
	const { showAndHideAlert } = useAlert();
	const router = useRouter();
	const [postImage, setPostImage] = useState<{
		file: File | null;
		url: string;
	} | null>(null);

	const initialValues: PostData = {
		title: isEditing && post ? post?.title : "",
		body: isEditing && post ? post?.body : "",
		published: isEditing && post ? post?.published : false,
	};

	useEffect(() => {
		if (isEditing && post) {
			setPostImage({
				file: null,
				url: post.image,
			});
		}
	}, [isEditing, post]);

	async function submitHandler(
		values: PostData,
		{ setSubmitting, resetForm }: FormikHelpers<PostData>
	) {
		try {
			if (!postImage) {
				throw new Error("Post Image is required");
			}

			if (!isEditing && !postImage.file) {
				throw new Error("Post Image is required");
			}

			if (!isEditing && postImage.file) {
				const res = await ApiInstance.post("/api/admin/upload-url", {
					contentType: postImage.file.type,
				});

				await axios.put(res.data.url, postImage.file);

				const postRes = await ApiInstance.post("/api/admin/posts", {
					...values,
					image: res.data.key,
				});

				showAndHideAlert({
					message: postRes.data.message,
					type: "success",
				});
			}

			if (isEditing && post) {
				if (postImage.file) {
					const res = await ApiInstance.post("/api/admin/upload-url", {
						contentType: postImage.file.type,
					});

					await axios.put(res.data.url, postImage.file);

					const postRes = await ApiInstance.put(
						"/api/admin/posts/" + post?.id,
						{
							...values,
							image: res.data.key,
						}
					);
					showAndHideAlert({
						message: postRes.data.message,
						type: "success",
					});
				} else {
					const postRes = await ApiInstance.put(
						"/api/admin/posts/" + post?.id,
						{
							...values,
							image: post?.image,
						}
					);
					showAndHideAlert({
						message: postRes.data.message,
						type: "success",
					});
				}
			}

			router.replace("/admin");
		} catch (error) {
			const err = error as AxiosError<any>;
			showAndHideAlert({
				message: err.response?.data.message ?? err.message,
				type: "error",
			});
			setSubmitting(false);
		}
	}

	return (
		<Formik
			validationSchema={schema}
			onSubmit={submitHandler}
			initialValues={initialValues}>
			{({ values, errors, isSubmitting, setFieldValue }) => (
				<Form className="flex flex-col gap-y-5">
					<label
						htmlFor="postImage"
						className="w-full flex flex-col gap-y-5 cursor-pointer">
						<span className="text-[1.7rem] text-appBlack font-medium">
							Post Image
						</span>
						<input
							accept="image/*"
							multiple={false}
							id="postImage"
							type="file"
							className="absolute invisible"
							onChange={(e) => {
								const files = e.target.files;
								if (files) {
									const blob = new Blob([files[0]], {
										type: files[0].type,
									});

									const url = URL.createObjectURL(blob);
									setPostImage({ file: files[0], url: url });
								}
								e.target.value = "";
							}}
						/>
						{postImage === null && (
							<motion.span
								whileTap={{ scale: 0.87, transition: { ease: "linear" } }}
								role="button"
								className=" !bg-[#f5f5f5] px-[10px] !text-[#787878] !w-max gap-3 flex items-center rounded-full h-[45px]">
								<ImageIcon />
								<span className="text-2xl">Select Image</span>
							</motion.span>
						)}
						{postImage && (
							<div>
								<Image
									src={postImage.url}
									className="w-[350px] h-[300px] object-cover"
									width={400}
									height={400}
									alt="Techlawyered"
								/>
								<span className="text-xl text-[#787878] mt-2 flex">
									Click image to change.
								</span>
							</div>
						)}
					</label>
					<AppInput
						name="title"
						label="Give your post a title"
						placeholder="Enter Title"
					/>
					<PostBody />
					<div className="flex items-center gap-3">
						<span className="text-2xl font-medium">Published:</span>
						<button
							onClick={() => {
								setFieldValue("published", !values.published);
							}}
							type="button">
							<Switch isOn={values.published} primary={false} />
						</button>
					</div>
					<AppButton
						showLoading={isSubmitting}
						type="submit"
						className="!bg-secondary w-full !text-primary">
						<span>Submit</span>
					</AppButton>
				</Form>
			)}
		</Formik>
	);
}
