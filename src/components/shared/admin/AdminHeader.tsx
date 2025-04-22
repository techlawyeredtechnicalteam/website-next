"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppButton from "../AppButton";
// import SideMenu from "./SideMenu";
// import Dropdown from "./Dropdown";

export default function AdminHeader() {
	return (
		<header className="h-[100px] bg-bgBlack px-5 md:px-[15px] lg:px-[25px] xl:px-[50px] flex items-center justify-between sticky top-0 z-[10] w-full">
			<Link href={"/admin"}>
				<Image
					src={"/logo.png"}
					width={100}
					height={80}
					alt="The Tech Lawyered"
				/>
			</Link>
			<nav className="">
				<Link href={"/"}>
					<AppButton classname="!bg-secondary !text-primary px-[20px]">
						<span>Back to website</span>
					</AppButton>
				</Link>
			</nav>
		</header>
	);
}
