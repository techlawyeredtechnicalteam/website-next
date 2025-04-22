"use client";
import React, { useState } from "react";
import AuthTab from "./AuthTab";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Auth() {
	const [currentTab, setCurrentTab] = useState<"login" | "signup">("login");

	return (
		<div className="w-full">
			<div className="w-[40%]">
				<AuthTab
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
					tabs={["login", "signup"]}
				/>
			</div>
			<div className="mt-12">
				{currentTab === "login" && <LoginForm />}
				{currentTab === "signup" && <SignupForm />}
			</div>
		</div>
	);
}
