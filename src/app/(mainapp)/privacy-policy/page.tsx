import React from "react";

export default function page() {
	return (
		<main>
			<section className="h-[300px] overflow-hidden relative">
				<div className="absolute w-full h-full bg-bgBlack top-0 px-5 md:px-[15px] lg:px-[25px] xl:px-[50px] flex flex-col items-center justify-center">
					<h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold text-white  font-hubot leading-[120%] text-center">
						Privacy Policy
					</h1>
					<p className="text-[2rem] mt-8 text-white">
						Last Updated: April 2025
					</p>
				</div>
			</section>
			<section className="py-10 flex flex-col items-center">
				<div className="w-[95%] md:w-[70%] xl:w-[50%] flex flex-col gap-y-5">
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							1. Introduction
						</h2>
						<p className="text-textGray text-[1.7rem]">
							Welcome to TheTechLawyered! Your privacy is important to us. This
							Privacy Policy explains how we collect, use, and protect your
							information when you use our services.
						</p>
					</div>
					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							2. Information We Collect
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								<span className="font-medium">Personal Information:</span> Name,
								email, phone number, and company details.
							</li>
							<li>
								<span className="font-medium">Business Information:</span>{" "}
								Project details and related communications.
							</li>
						</ul>
					</div>

					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							3. How We Use Your Information
						</h2>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>
								To provide and improve our web, mobile development, and legal
								services.
							</li>
							<li>
								To communicate with clients and manage project interactions.
							</li>
							<li>To ensure data security and prevent fraud.</li>
							<li>To comply with legal obligations and enforce policies.</li>
						</ul>
					</div>

					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							4. Sharing of Information
						</h2>
						<p className="text-textGray text-[1.7rem]">
							We do not sell your personal information. However, we may share
							your data with:
						</p>
						<ul className="list-disc pl-5 text-textGray text-[1.7rem]">
							<li>Service providers assisting in web and app development.</li>
							<li>Legal authorities if required by law.</li>
							<li>Business transfers in case of mergers or acquisitions.</li>
						</ul>
					</div>

					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							5. Security Measures
						</h2>
						<p className="text-textGray text-[1.7rem]">
							We implement strict security protocols to protect your
							information, including encryption and secure servers.
						</p>
					</div>

					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							6. Updates to This Policy
						</h2>
						<p className="text-textGray text-[1.7rem]">
							We may update this Privacy Policy occasionally. You will be
							notified of significant changes via email or website
							notifications.
						</p>
					</div>

					<div className="mt-6">
						<h2 className="text-[2rem] md:text-[3rem] font-semibold text-textBlack">
							7. Contact Us
						</h2>
						<p className="text-textGray text-[1.7rem]">
							If you have any questions, contact us at
							<a
								href="mailto:info@thetechlawyered.ng"
								className="text-textBlack underline">
								info@thetechlawyered.ng
							</a>
							.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
