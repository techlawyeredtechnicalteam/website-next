import AppButton from "@/components/shared/AppButton";
import DockerIcon from "@/components/shared/icons/DockerIcon";
import FigmaIcon from "@/components/shared/icons/FigmaIcon";
import GitHub from "@/components/shared/icons/GitHub";
import Javascript from "@/components/shared/icons/Javascript";
import Legal from "@/components/shared/icons/Legal";
import MobileDev from "@/components/shared/icons/MobileDev";
import Mongodb from "@/components/shared/icons/Mongodb";
import NextIcon from "@/components/shared/icons/NextIcon";
import NodeJs from "@/components/shared/icons/NodeJs";
import ReactIcon from "@/components/shared/icons/ReactIcon";
import VerifiedIcon from "@/components/shared/icons/VerifiedIcon";
import Vitest from "@/components/shared/icons/Vitest";
import WebDev from "@/components/shared/icons/WebDev";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<section className="max-[376px]:h-[55vh] h-[50vh] md:h-[50vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden relative">
				<Image
					priority={true}
					width={1000}
					height={1000}
					className="w-full h-full object-cover"
					alt="Navigo Rides"
					src={"/hero.png"}
				/>
				<div className="absolute w-full h-full  top-0 px-5 md:px-[15px] lg:px-[25px] xl:px-[50px] flex flex-col justify-center">
					<h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5rem] xl:text-[8rem] font-extrabold text-white lg:w-[75%]  font-hubot leading-[120%]">
						Where <span className="text-secondary">Technology</span> Meets Legal{" "}
						<span className="text-secondary">Excellence</span>
					</h1>
					<p className="mt-6 md:w-[60%] lg:w-[70%] xl:w-[50%] text-[1.7rem] md:text-[2rem] text-white">
						{`Building innovative software solutions for the modern legal industry.`}
					</p>
					<AppButton
						label="Get In Touch"
						fullyRounded
						classname="bg-primary !text-secondary  !w-max px-[40px] mt-[20px] !text-[1.7rem]"
					/>
				</div>
			</section>
			<section className="px-5 md:px-[50px] lg:px-[50px] xl:px-[100px] pb-0 pt-16 md:py-16 flex-col lg:flex-row flex w-full gap-6 bg-[#f5f5f5]">
				<div className="lg:w-1/2 flex flex-col justify-center">
					<h2 className="text-[3rem] md:text-[3rem] lg:text-[3rem] xl:text-[4rem] font-bold text-textBlack font-hubot leading-[130%]">
						Who We Are
					</h2>
					<p className="mt-6 text-[1.7rem] text-textBlack">
						{`TechLawyered fuels innovation. We're your strategic partner for software development, delivering cutting-edge solutions that drive business growth.
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
			<section className="px-5 md:px-[50px] py-24">
				<div className="flex flex-col items-center justify-center">
					<h2 className="md:w-[50%] xl:w-[60%] text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold text-textBlack font-hubot leading-[130%] text-center">
						What We Do
					</h2>
					<p className="mt-3 text-[1.7rem] text-textGray text-center">
						Our Services
					</p>
				</div>
				<div className="mt-16 grid lg:grid-cols-3 gap-8">
					<div className="p-8 rounded-2xl bg-white drop-shadow-xl">
						<div className="w-[65px] h-[65px] bg-[#DFFAFF] rounded-xl flex items-center justify-center">
							<WebDev />
						</div>
						<div className="mt-5">
							<h5 className="text-[2rem] xl:text-[3rem] font-hubot font-semibold text-textBlack">
								Web Development
							</h5>
							<p className="mt-3 text-[2rem] text-textBlack">
								{`We create websites that are not just visually appealing but also fast, user-friendly, and built to grow with your business.`}
							</p>
							<Link href="/services/web-dev">
								<AppButton
									fullyRounded
									label="Learn more"
									classname="bg-transparent border border-primary !text-bgBlack  px-[30px] w-max mt-8 !text-[1.7rem]"
								/>
							</Link>
						</div>
					</div>
					<div className="p-8 rounded-2xl bg-white drop-shadow-xl">
						<div className="w-[65px] h-[65px] bg-[#DFFAFF] rounded-xl flex items-center justify-center">
							<MobileDev />
						</div>
						<div className="mt-5">
							<h5 className="text-[2rem] xl:text-[3rem] font-hubot font-semibold text-textBlack">
								Mobile Development
							</h5>
							<p className="mt-3 text-[2rem] text-textBlack">
								{`Whether it’s an iOS or Android app, we build smooth, easy-to-use mobile experiences that connect you with your audience.`}
							</p>
							<Link href="/services/mobile-dev">
								<AppButton
									fullyRounded
									label="Learn more"
									classname="bg-transparent border border-primary !text-bgBlack  px-[30px] w-max mt-8 !text-[1.7rem]"
								/>
							</Link>
						</div>
					</div>
					<div className="p-8 rounded-2xl bg-white drop-shadow-xl">
						<div className="w-[65px] h-[65px] bg-[#DFFAFF] rounded-xl flex items-center justify-center">
							<Legal />
						</div>
						<div className="mt-5">
							<h5 className="text-[2rem] xl:text-[3rem] font-hubot font-semibold text-textBlack">
								Legal Solutions
							</h5>
							<p className="mt-3 text-[2rem] text-textBlack">
								{`We help businesses navigate the legal side of things—contracts, compliance, and digital regulations—so you can focus on what you do best.`}
							</p>
							<Link href="/services/legal-solutions">
								<AppButton
									fullyRounded
									label="Learn more"
									classname="bg-transparent border border-primary !text-bgBlack  px-[30px] w-max mt-8 !text-[1.7rem]"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-24">
				<div className="flex flex-col items-center justify-center px-5 md:px-[50px] ">
					<h2 className="md:w-[50%] xl:w-[60%] text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold text-textBlack font-hubot leading-[130%] text-center">
						Tools & Technologies We Use
					</h2>
				</div>
				<div className="w-full h-[10rem] bg-[#DFFAFF] mt-10">
					<div className="overflow-hidden w-full h-full">
						<div className="h-full flex items-center gap-[120px]">
							<div className="h-full flex items-center gap-[120px] w-max techshowcase">
								<FigmaIcon />
								<Javascript />
								<NextIcon />
								<GitHub />
								<Mongodb />
								<NodeJs />
								<ReactIcon />
								<Vitest />
								<DockerIcon />
							</div>
							<div className="h-full flex items-center gap-[120px] w-max techshowcase">
								<FigmaIcon />
								<Javascript />
								<NextIcon />
								<GitHub />
								<Mongodb />
								<NodeJs />
								<ReactIcon />
								<Vitest />
								<DockerIcon />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="grid lg:grid-cols-2">
				<div className="p-12 flex items-center justify-center order-last lg:order-none  bg-[#f5f5f5]">
					<Image
						src={
							"https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						}
						width={1000}
						height={700}
						alt="Tech Lawyered"
						className="object-cover w-full h-full rounded-2xl"
					/>
				</div>
				<div className="bg-bgBlack py-[28px] p-[20px]">
					<h4 className="text-white text-[3rem] font-semibold mb-10">
						What Sets Us Apart
					</h4>
					<div className="flex flex-col gap-8">
						<div className="flex gap-4">
							<div className="relative top-[3px]">
								<VerifiedIcon />
							</div>
							<div className="flex flex-col gap-2">
								<h6 className="text-[2.2rem] font-medium text-white">
									Legal Industry Focus
								</h6>
								<p className="text-[1.7rem] text-white w-[90%] font-light">
									{`We specialize exclusively in legal tech.`}
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="relative top-[3px]">
								<VerifiedIcon />
							</div>
							<div className="flex flex-col gap-2">
								<h6 className="text-[2.2rem] font-medium text-white">
									Deep Legal Understanding
								</h6>
								<p className="text-[1.7rem] text-white w-[90%] font-light">
									{`We respect client confidentiality and ethics.`}
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="relative top-[3px]">
								<VerifiedIcon />
							</div>
							<div className="flex flex-col gap-2">
								<h6 className="text-[2.2rem] font-medium text-white">
									Local Meets Global
								</h6>
								<p className="text-[1.7rem] text-white w-[90%] font-light">
									{`We blend Nigerian legal requirements with global best practices.`}
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="relative top-[3px]">
								<VerifiedIcon />
							</div>
							<div className="flex flex-col gap-2">
								<h6 className="text-[2.2rem] font-medium text-white">
									Technology Meets Tradition
								</h6>
								<p className="text-[1.7rem] text-white w-[90%] font-light">
									{`Innovation that complements legal values.`}
								</p>
							</div>
						</div>
					</div>
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
						src={
							"https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						}
						width={1000}
						height={700}
						alt="Tech Lawyered"
						className="object-cover w-full h-full rounded-2xl"
					/>
				</div>
			</section>
			<section className="py-2 bg-secondary"></section>
		</main>
	);
}
