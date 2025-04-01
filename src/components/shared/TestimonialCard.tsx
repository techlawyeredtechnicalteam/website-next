"use client";
import React from "react";
import QuoteIcon from "./icons/QuoteIcon";
import Avatar from "./Avatar";

export default function TestimonialCard() {
	return (
		<div className="bg-light-gray p-8 w-[343px] md:w-[443px] h-[273px] md:h-[323px] rounded-2xl flex flex-col justify-center">
			<QuoteIcon />
			<p className="text-[13px] md:text-[1.7rem] text-text-black leading-[150%] my-8">
				{`Lorem ipsum dolor sit amet consectetur. Faucibus vestibulum etiam tortor
				dui. Purus pellentesque nulla a ipsum pharetra mi mauris. Diam cursus ac
				quam at vestibulum volutpat. Lectus volutpat bibendum quam placerat
				dignissim facilisi nisi nulla sit.`}
			</p>
			<div className="flex items-center gap-5">
				<Avatar
					alt="LGFT"
					size={45}
					src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				<div className="flex flex-col">
					<span className="text-text-black font-bold text-[1.7rem]">
						Victore Ikpeba
					</span>
					<span className="text-[1.4rem] text-[#5f5f5f]">
						Founder at Odogwu Foundations
					</span>
				</div>
			</div>
		</div>
	);
}
