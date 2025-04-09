"use client";
import React from "react";
import QuoteIcon from "./icons/QuoteIcon";
import Avatar from "./Avatar";

export default function TestimonialCard({
	testimonial,
}: {
	testimonial: {
		comment: string;
		authorImage: string;
		authorName: string;
		authorRole: string;
	};
}) {
	return (
		<div className="bg-light-gray p-8 w-[343px] md:w-[443px] h-[273px] md:h-[323px] rounded-2xl flex flex-col justify-center">
			<QuoteIcon />
			<p className="text-[13px] md:text-[1.7rem] text-text-black leading-[150%] my-8">
				{testimonial.comment}
			</p>
			<div className="flex items-center gap-5">
				<Avatar alt="LGFT" size={45} src={testimonial.authorImage} />
				<div className="flex flex-col">
					<span className="text-text-black font-bold text-[1.7rem]">
						{testimonial.authorName}
					</span>
					<span className="text-[1.4rem] text-[#5f5f5f]">
						{testimonial.authorRole}
					</span>
				</div>
			</div>
		</div>
	);
}
