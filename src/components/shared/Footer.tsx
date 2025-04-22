"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterXIcon from "./icons/TwitterXIcon";

export default function Footer() {
	return (
		<footer className="px-5 md:px-[15px] lg:px-[25px] xl:px-[50px] py-12 bg-bgBlack">
			<div className="flex flex-col lg:flex-row lg:items-center justify-between w-full pb-[40px] gap-y-12">
				<Image src={"/logo.png"} width={100} height={80} alt="Navigo Rides" />
				<nav className="flex flex-wrap items-center gap-6 md:gap-10">
					<Link href={"/about"} className="text-[1.7rem]  text-white">
						About Us
					</Link>
					<Link href={"/contact"} className="text-[1.7rem]  text-white">
						Contact
					</Link>
					<Link href={"/privacy-policy"} className="text-[1.7rem]  text-white">
						Privacy Policy
					</Link>
					<Link href={"/blog"} className="text-[1.7rem]  text-white">
						Our Blog
					</Link>
				</nav>
			</div>
			<div className="pt-[20px] flex flex-col md:flex-row md:items-center justify-between border-t border-t-[#73eaff50] gap-[20px]">
				<span className="text-2xl text-white">
					&copy; 2025{" "}
					{`${
						new Date(Date.now()).getFullYear() > 2025
							? ` - ${new Date(Date.now()).getFullYear()}`
							: ""
					}`}{" "}
					TheTechLawyered. All rights reserved
				</span>
				<div className="flex items-center gap-[33px]">
					<Link href={"#"}>
						<InstagramIcon />
					</Link>
					<Link href={"#"}>
						<FacebookIcon />
					</Link>
					<Link href={"#"}>
						<TwitterXIcon />
					</Link>
				</div>
			</div>
		</footer>
	);
}
