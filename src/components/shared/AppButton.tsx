"use client";
import React, { PropsWithChildren } from "react";
import AppLoader from "./AppLoader";
import { motion, MotionStyle } from "framer-motion";

interface AppButtonProps {
	label?: string;
	type?: "button" | "submit" | "reset" | undefined;
	showLoading?: boolean;
	fullyRounded?: boolean;
	styles?: MotionStyle;
	classname?: string;
}

function AppButton({
	label,
	showLoading = false,
	type = "submit",
	fullyRounded = false,
	styles,
	children,
	classname,
	...otherProps
}: AppButtonProps & PropsWithChildren) {
	return (
		<motion.button
			whileTap={{ scale: 0.87, transition: { ease: "linear" } }}
			type={type}
			style={styles}
			{...otherProps}
			className={`${
				fullyRounded ? "rounded-full" : "rounded-2xl"
			} h-[50px] cursor-pointer disabled:cursor-not-allowed flex items-center justify-center text-2xl text-white ${classname}`}
			disabled={showLoading}>
			{showLoading && <AppLoader width="3rem" height="3rem" border="0.2rem" />}
			{!showLoading && label && label}
			{!showLoading && children && children}
		</motion.button>
	);
}

export default AppButton;
