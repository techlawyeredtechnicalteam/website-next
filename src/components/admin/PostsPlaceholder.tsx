import React from "react";

export default function PostsPlaceholder({
	forWebsite,
}: {
	forWebsite?: boolean;
}) {
	return forWebsite ? (
		<div className="w-full rounded-2xl p-6 transition-all duration-200">
			<div className="w-full h-[282px] object-cover bg-[#d3d3d3]  object-top animate-pulse"></div>
			<div className="flex flex-col gap-y-3 mt-5">
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[90%] rounded-full"></h5>
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[50%]"></h5>
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[30%]"></h5>
			</div>
			<div className="flex items-center gap-5 mt-5">
				<div className="line-clamp-3 text-[2rem] font-semibold h-[50px] bg-[#d3d3d3] animate-pulse w-[50px] rounded-full"></div>
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[30%]"></h5>
			</div>
		</div>
	) : (
		<div className="border-[#d6d6d6] border rounded-2xl p-5">
			<div className="flex items-center justify-between mb-3">
				<div className="flex items-center gap-3">
					<div className="w-[50px] h-[50px] rounded-full object-cover bg-[#d3d3d3] animate-pulse"></div>
					<span className="text-2xl font-medium h-[5px] bg-[#d3d3d3] animate-pulse w-[80px] rounded-full"></span>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[90%] rounded-full"></h5>
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[50%]"></h5>
				<h5 className="line-clamp-3 text-[2rem] font-semibold h-[5px] bg-[#d3d3d3] animate-pulse w-[30%]"></h5>
			</div>
			<div className="flex items-center gap-5 mt-5">
				<div className="line-clamp-3 text-[2rem] font-semibold h-[50px] bg-[#d3d3d3] animate-pulse w-[15%] rounded-2xl"></div>
				<div className="line-clamp-3 text-[2rem] font-semibold h-[50px] bg-[#d3d3d3] animate-pulse w-[15%] rounded-2xl"></div>
			</div>
		</div>
	);
}
