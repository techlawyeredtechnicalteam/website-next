"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAlert from "@/hooks/useAlert";
import axios, { AxiosError } from "axios";
import { useRootStore } from "../shared/providers/RootProvider";
import { ApiInstance } from "@/utils/api-instance";
import Image from "next/image";
import AppLoader from "../shared/AppLoader";

export default function Profile({ forNewUser = true }) {
	const { showAndHideAlert } = useAlert();
	const { user, setUser } = useRootStore();
	const [uploadingProfile, setUploadingProfile] = useState(false);
	const [profilePic, setProfilePic] = useState<{
		file: File;
		url: string;
	} | null>(null);
	async function profilePicHandler() {
		try {
			setUploadingProfile(true);
			const res = await ApiInstance.post("/api/admin/upload-url", {
				contentType: profilePic?.file.type,
			});

			await axios.put(res.data.url, profilePic?.file);

			const postRes = await ApiInstance.put("/api/admin/me/profile-pic", {
				image: res.data.key,
			});

			showAndHideAlert({
				message: postRes.data.message,
				type: "success",
			});
			setUser(postRes.data.updatedUser);
			setUploadingProfile(false);
		} catch (error) {
			const err = error as AxiosError<any>;

			showAndHideAlert({
				message: err.response?.data.message ?? err.message,
				type: "error",
			});
			setUploadingProfile(false);
		}
	}

	useEffect(() => {
		if (profilePic) {
			profilePicHandler();
		}
	}, [profilePic]);

	return forNewUser ? (
		<>
			{!uploadingProfile ? (
				<>
					<p className="text-center text-[2.5rem] font-semibold text-gray-700">
						No profile photo yet 👀
					</p>
					<p className="w-[70%] text-2xl text-center text-gray-500">
						Add a photo so readers can see the face behind the words—makes
						things a bit more personal!
					</p>
					<label htmlFor="profile-pic">
						<input
							accept="image/*"
							multiple={false}
							id="profile-pic"
							type="file"
							className="absolute invisible"
							onChange={(e) => {
								const files = e.target.files;
								if (files) {
									const blob = new Blob([files[0]], {
										type: files[0].type,
									});

									const url = URL.createObjectURL(blob);
									setProfilePic({ file: files[0], url: url });
								}
								e.target.value = "";
							}}
						/>
						<motion.span
							whileTap={{ scale: 0.87, transition: { ease: "linear" } }}
							role="button"
							className="cursor-pointer px-[20px]  !w-max gap-3 flex items-center rounded-2xl h-[45px] !bg-primary !text-secondary mt-5">
							<span className="text-2xl">Upload a cool photo</span>📸
						</motion.span>
					</label>
				</>
			) : (
				<AppLoader />
			)}
		</>
	) : (
		<>
			<label htmlFor="profile-pic-2">
				<input
					accept="image/*"
					multiple={false}
					id="profile-pic-2"
					type="file"
					className="fixed invisible"
					onChange={(e) => {
						const files = e.target.files;
						if (files) {
							const blob = new Blob([files[0]], {
								type: files[0].type,
							});

							const url = URL.createObjectURL(blob);
							setProfilePic({ file: files[0], url: url });
						}
						e.target.value = "";
					}}
				/>
				{user?.profilePicture && !uploadingProfile && (
					<Image
						width={300}
						height={300}
						src={profilePic?.url ?? user.profilePicture}
						className="w-[50px] h-[50px] object-cover rounded-full"
						alt="Cyntonisca"
					/>
				)}

				{!user?.profilePicture && !uploadingProfile && (
					<Image
						width={300}
						height={300}
						alt="Cyntonisca"
						src={"/no-profile.png"}
						className="w-[50px] h-[50px] object-cover rounded-full"
					/>
				)}

				{uploadingProfile && (
					<div className="w-[50px] h-[50px] object-cover rounded-full flex items-center justify-center">
						<AppLoader />
					</div>
				)}
			</label>
		</>
	);
}
