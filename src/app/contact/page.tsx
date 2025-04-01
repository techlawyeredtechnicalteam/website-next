import React from "react";
import Image from "next/image";
import EmailIcon from "@/components/shared/icons/EmailIcon";
import Link from "next/link";
import WhatsappIcon from "@/components/shared/icons/WhatsappIcon";
import AppButton from "@/components/shared/AppButton";
import CallIcon from "@/components/shared/icons/CallIcon";
import LocationIcon from "@/components/shared/icons/LocationIcon";

export default function page() {
	return (
		<main>
			<section className="max-[376px]:h-[50vh] h-[40vh] md:h-[50vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden relative">
				<Image
					priority={true}
					width={1000}
					height={1000}
					className="w-full h-full object-cover object-top"
					alt="Tech Lawyered"
					src={"/about.png"}
				/>
				<div className="absolute w-full h-full  top-0 px-5 md:px-[15px] lg:px-[25px] xl:px-[50px] flex flex-col justify-center">
					<h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold text-white lg:w-[70%] font-hubot leading-[120%]">
						We are here for you, contact us at{" "}
						<span className="text-secondary">anytime</span>
					</h1>
					<p className="mt-6 md:w-[60%] lg:w-[70%] xl:w-[50%] text-[1.7rem] md:text-[2rem] text-white">
						{`Have questions or need assistance? Contact us today and let's discuss how we can help your legal practice.`}
					</p>
				</div>
			</section>
			<section className="px-[15px] md:px-[80px] lg:px-[140px] xl:px-[40px] grid md:grid-cols-2 xl:grid-cols-4 gap-[20px] pt-20 pb-20">
				<div className="w-full h-[252px] bg-[#DFFAFF] p-[20px] rounded-2xl shadow-xl flex flex-col items-center justify-center">
					<div className="pb-[20px] border-b border-b-[#D2D2D2] flex flex-col items-center justify-center gap-[25px] w-full">
						<EmailIcon />
						<div className=" flex flex-col items-center justify-center gap-1">
							<h6 className="text-[2.2rem] font-bold text-text-black">
								Email Us
							</h6>
							<span className="text-2xl text-[#5f5f5f]">
								We’re here to help
							</span>
						</div>
					</div>
					<Link href={"mailto:support@navigorides.com.ng"}>
						<p className="text-center text-[1.7rem] underline font-medium mt-[15px]">
							support@techlawyered.com.ng
						</p>
					</Link>
				</div>
				<div className="w-full h-[252px] bg-[#DFFAFF] p-[20px] rounded-2xl shadow-xl flex flex-col items-center justify-center">
					<div className="pb-[20px] border-b border-b-[#D2D2D2] flex flex-col items-center justify-center gap-[25px] w-full">
						<WhatsappIcon />
						<div className=" flex flex-col items-center justify-center gap-1">
							<h6 className="text-[2.2rem] font-bold text-text-black">
								Chat on Whatsapp
							</h6>
							<span className="text-2xl text-[#5f5f5f]">
								Speak to our friendly team
							</span>
						</div>
					</div>
					<AppButton
						label="Start Chat"
						classname="bg-primary  w-max px-[15px] !text-secondary mt-[15px]"
						fullyRounded
					/>
				</div>
				<div className="w-full h-[252px] bg-[#DFFAFF] p-[20px] rounded-2xl shadow-xl flex flex-col items-center justify-center">
					<div className="pb-[20px] border-b border-b-[#D2D2D2] flex flex-col items-center justify-center gap-[25px] w-full">
						<CallIcon />
						<div className=" flex flex-col items-center justify-center gap-1">
							<h6 className="text-[2.2rem] font-bold text-text-black">
								Give us a call
							</h6>
							<span className="text-2xl text-[#5f5f5f]">
								Mon -Fri from 8am - 5pm
							</span>
						</div>
					</div>
					<Link href={"tel:+234 905 6788 293"}>
						<p className="text-center text-[1.7rem] underline font-medium mt-[15px]">
							+234 905 6788 293
						</p>
					</Link>
				</div>
				<div className="w-full h-[252px] bg-[#DFFAFF] p-[20px] rounded-2xl shadow-xl flex flex-col items-center justify-center">
					<div className="pb-[20px] border-b border-b-[#D2D2D2] flex flex-col items-center justify-center gap-[25px] w-full">
						<LocationIcon />
						<div className=" flex flex-col items-center justify-center gap-1">
							<h6 className="text-[2.2rem] font-bold text-text-black">
								Visit Us
							</h6>
							<span className="text-2xl text-[#5f5f5f]">
								Visit our hq office
							</span>
						</div>
					</div>
					<Link href={"#"}>
						<p className="text-center text-[1.7rem] underline font-medium mt-[15px]">
							View on google maps
						</p>
					</Link>
				</div>
			</section>
		</main>
	);
}
