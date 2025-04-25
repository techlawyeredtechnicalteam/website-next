import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				pathname: "/**", 
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "media.istockphoto.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img.freepik.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname:
					"tech-lawyered-storage-bucket-test.s3.eu-north-1.amazonaws.com",
				pathname: "/**",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
