"use client";
import React from "react";
import { useRootStore } from "../shared/providers/RootProvider";

export default function WelcomeText() {
	const { user, setUser } = useRootStore();
	return (
		<h1 className="text-[2rem]  md:text-[2.5rem] font-semibold md:font-bold  md:w-max line-clamp-2">
			Hello, <br className="md:hidden" />
			{user?.fullName} 👋🏽
		</h1>
	);
}
