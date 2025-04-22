"use client";
import React from "react";

export default function Switch({
	primary = false,
	isOn,
}: {
	primary: boolean;
	isOn: boolean;
}) {
	const primaryClass = primary
		? `${isOn ? "bg-primary" : "bg-[#d3d3d3]"}`
		: `${isOn ? "bg-secondary" : "bg-[#d3d3d3]"}`;

	const fullClass = `${
		primary !== undefined && primaryClass
	} rounded-full relative w-[5.4rem] h-[2.7rem] cursor-pointer`;

	return (
		<div className={fullClass}>
			<span
				className={`transition-all duration-100 absolute top-0 bottom-0 m-auto flex w-[1.89rem] h-[1.89rem] rounded-full  ${
					isOn
						? "translate-x-[3rem] bg-primary"
						: "translate-x-[0.5rem] bg-white"
				}`}></span>
		</div>
	);
}
