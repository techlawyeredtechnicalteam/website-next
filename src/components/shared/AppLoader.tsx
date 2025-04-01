import React from "react";

export default function AppLoader({
	width = "5rem",
	height = "5rem",
	border = "0.5rem",
}) {
	return (
		<div
			style={{ width, height, borderWidth: border }}
			className="rounded-full  border-[#C8DCFE] border-t-primary  animate-loaderspin"></div>
	);
}

AppLoader.Secondary = function () {
	return (
		<div className="spinner">
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
		</div>
	);
};
