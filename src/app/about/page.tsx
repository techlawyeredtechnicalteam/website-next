import React from "react";
import Image from "next/image";
import TestimonialCard from "@/components/shared/TestimonialCard";
import AppButton from "@/components/shared/AppButton";

export default function page() {
	return (
		<main>
			<section className="py-12 md:py-24 flex items-center justify-center">
				<div className="w-[95%] lg:w-[80%] xl:w-[70%]">
					<div className="flex items-center justify-center w-max p-5 gap-3 bg-[#f5f5f5] rounded-full">
						<span className="w-[10px] h-[10px] bg-primary rounded-full"></span>
						<span className="text-primary text-2xl">About Us</span>
					</div>
					<h1 className="mt-5 text-[3rem] md:text-[5rem] font-semibold text-textBlack">
						Bridging the gap between legal expertise and digital innovation.
					</h1>
					<p className="text-[1.7rem] text-[#505050] mt-5 w-full md:w-[80%]">
						{`Founded by legal technology enthusiasts, we understand the unique
						challenges law firms face in today's digital age. Our mission is to
						revolutionize the legal industry in Nigeria with tailored tech
						solutions.`}
					</p>
				</div>
			</section>
			<section className="h-[300px] md:h-[400px] lg:h-[500px]">
				<Image
					priority={true}
					width={1000}
					height={1000}
					className="w-full h-full object-cover object-top"
					alt="Navigo Rides"
					src={"/about.png"}
				/>
			</section>
			<section className="px-5 md:px-[50px] lg:px-[50px] xl:px-[100px] pb-0 pt-16 md:py-16 flex-col lg:flex-row flex w-full gap-6 ">
				<div className="lg:w-1/2 flex flex-col justify-center">
					<h2 className="text-[3rem] md:text-[3rem] lg:text-[3rem] xl:text-[4rem] font-bold text-textBlack font-hubot leading-[130%]">
						Who We Are
					</h2>
					<p className="mt-6 text-[1.7rem] text-textBlack">
						{`TheTechLawyered fuels innovation. We're your strategic partner for software development, delivering cutting-edge solutions that drive business growth.
            Our immersive coding bootcamps empower aspiring developers with in-demand skills, while our expert DevOps services optimize your technology stack for peak performance.`}
					</p>
				</div>
				<div className="lg:w-1/2">
					<Image
						src={"/who-we.png"}
						width={1000}
						height={1000}
						className="w-full h-full object-cover rounded-2xl"
						alt="Navigo Rides"
					/>
				</div>
			</section>
			<section className=" bg-[#f5f5f5] py-[30px] md:py-[60px] flex flex-col items-center justify-center">
				<div className="mt-12 w-[95%] md:w-[90%] lg:w-[85%] xl:w-[75%] border-t border-t-primary p-5 md:p-[20px]">
					<h6 className="text-[4rem] font-semibold mb-7">Our Vision</h6>
					<p className="text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-medium">{`To be Nigeria's leading legal technology solutions provider, empowering law firms to thrive in the digital era while maintaining professional excellence.`}</p>
				</div>
			</section>
			<section className="py-24">
				<div className="flex items-ceneter justify-center w-full mb-16">
					<h2 className="w-max text-center text-[3rem] md:text-[4rem] xl:text-[4rem] font-extrabold leading-[120%] text-text-black">
						What Our Clients Say
					</h2>
				</div>
				<div className="w-full flex flex-col gap-[1.5rem] relative">
					<div className="absolute top-0 left-0 h-full w-[200px] z-[2] bg-linear-to-r from-white to-60%"></div>
					<div className="overflow-hidden w-full">
						<div className="flex items-center gap-[1.5rem]">
							<div className="flex items-center gap-[1.5rem] w-max showcase">
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
							</div>
							<div className="flex items-center gap-[1.5rem] w-max showcase">
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
							</div>
						</div>
					</div>
					<div className="overflow-hidden w-full">
						<div className="flex items-center gap-[1.5rem]">
							<div className="flex items-center gap-[1.5rem] w-max showcase-reverse">
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
							</div>
							<div className="flex items-center gap-[1.5rem] w-max showcase-reverse">
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
								<TestimonialCard />
							</div>
						</div>
					</div>
					<div className="absolute top-0 right-0 h-full w-[200px] z-[2] bg-linear-to-l from-white to-60%"></div>
				</div>
			</section>
			<section className="grid lg:grid-cols-2">
				<div className="bg-bgBlack lg:py-[28px] md:px-[20px] py-[50px] md:py-[100px] lg:p-[20px] lg:px-[60px] px-[15px] flex flex-col justify-center">
					<h4 className="text-[3.5rem] md:text-[4rem] xl:text-[5rem] font-bold text-white">
						Have a project in mind ?
					</h4>
					<p className="text-[1.7rem] text-white font-light md:w-[70%] lg:w-[90%] xl:w-[75%]">
						{`Let’s bring it to life — reach out to us today!`}
					</p>
					<AppButton
						label="Get In Touch"
						fullyRounded
						classname="bg-primary !text-secondary !w-max px-[40px] mt-[20px]"
					/>
				</div>
				<div className="flex items-center justify-center p-12 bg-[#f5f5f5]">
					<Image
						src={"/tech-lawyer.png"}
						width={1000}
						height={700}
						alt="Tech Lawyered"
						className="object-cover object-top w-full h-[300px] lg:h-[500px] rounded-2xl"
					/>
				</div>
			</section>
			<section className="py-2 bg-secondary"></section>
		</main>
	);
}
