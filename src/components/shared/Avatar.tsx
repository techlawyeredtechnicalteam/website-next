"use client";
import Image from "next/image";
import React from "react";

export default function Avatar({
	src,
	size = 50,
	alt,
}: {
	src: string;
	size: number;
	alt: string;
}) {
	return (
		<Image
			src={src}
			width={size}
			height={size}
			alt={alt}
			style={{
				height: size,
				width: size,
				borderRadius: "100%",
				objectFit: "cover",
			}}
		/>
	);
}
