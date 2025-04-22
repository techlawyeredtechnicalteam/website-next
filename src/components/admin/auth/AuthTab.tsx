"use client";
import AppButton from "@/components/shared/AppButton";
import React from "react";

export default function AuthTab({
	currentTab,
	tabs,
	setCurrentTab,
}: {
	currentTab: "login" | "signup";
	tabs: ["login", "signup"];
	setCurrentTab: (val: "login" | "signup") => void;
}) {
	return (
		<div className="w-full rounded-2xl bg-[#f5f5f5] flex" role="tab">
			{tabs.map((d, i) => (
				<AppButton
					onClick={() => {
						setCurrentTab(d);
					}}
					key={i}
					classname={`w-1/2 ${
						currentTab === d
							? "!bg-primary !text-secondary"
							: "!bg-transparent !text-[#787878]"
					}`}>
					<span>{d}</span>
				</AppButton>
			))}
		</div>
	);
}
