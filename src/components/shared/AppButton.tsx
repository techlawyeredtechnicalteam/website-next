"use client";
import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";
import AppLoader from "./AppLoader";
import { HTMLMotionProps, motion, MotionStyle } from "framer-motion";

interface AppButtonProps extends HTMLMotionProps<"button"> {
	label?: string;
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
			} h-[50px] cursor-pointer disabled:cursor-not-allowed flex items-center justify-center text-2xl text-white ${classname} ${
				otherProps.className
			}`}
			disabled={showLoading}>
			{showLoading && <AppLoader width="3rem" height="3rem" border="0.2rem" />}
			{!showLoading && label && label}
			{!showLoading && children && children}
		</motion.button>
	);
}

export default AppButton;
