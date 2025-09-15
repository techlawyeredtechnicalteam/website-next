import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import AppButton from "@/components/shared/AppButton";
import WebDev from "@/components/shared/icons/WebDev";
import Legal from "@/components/shared/icons/Legal";
import MobileDev from "@/components/shared/icons/MobileDev";
import { Metadata } from "next";

const data: any = {
  "web-dev": {
    title: "Web Development",
    headerText: `At Cyntonisca, we craft high-performance websites that are visually stunning and functionally robust. Whether you're a startup, a growing business, or an enterprise, our team delivers custom web solutions tailored to your needs. From engaging front-end designs to scalable back-end architectures, we ensure your website not only meets industry standards but exceeds user expectations.`,
    imgSrc: "/web-dev.png",
    offeringsText: `We offer end-to-end web development services—from strategy and design to development and optimization. Our goal is to build fast, secure, and scalable web applications that drive engagement and business growth.`,
    offerings: [
      {
        title: "Custom Website Development",
        description: `We design and build custom websites tailored to your brand and business needs. Our approach ensures intuitive navigation, seamless user experience, and performance optimization.`
      },
      {
        title: "E-Commerce Solutions",
        description: `From small online stores to large marketplaces, we create secure and scalable e-commerce platforms with seamless checkout experiences and powerful integrations.`
      },
      {
        title: "Web App Development",
        description: `We develop high-performing, feature-rich web applications with cutting-edge technologies, ensuring efficiency, scalability, and a smooth user experience.`
      }
    ]
  },
  "mobile-dev": {
    title: "Mobile Development",
    headerText: `Mobile-first experiences are essential in today’s digital landscape. At Cyntonisca, we build intuitive, high-performing mobile applications that keep users engaged. Whether it’s native development for iOS and Android or a cross-platform solution, our team delivers apps that combine beautiful design with seamless functionality.`,
    imgSrc: "/mobile-dev.png",
    offeringsText: `We provide full-cycle mobile app development services, from ideation and UI/UX design to development and post-launch support. Our apps are built for performance, scalability, and user engagement.`,
    offerings: [
      {
        title: "iOS & Android Development",
        description: `We create native mobile applications that leverage the full potential of iOS and Android platforms, ensuring smooth performance and a seamless user experience.`
      },
      {
        title: "Cross-Platform Development",
        description: `Our expertise in React Native allows us to build cost-effective, high-performance apps that run seamlessly on both iOS and Android devices.`
      },
      {
        title: "App Maintenance & Optimization",
        description: `Beyond development, we offer ongoing support, updates, and performance optimizations to keep your mobile app running smoothly and efficiently.`
      }
    ]
  },
  "legal-solutions": {
    title: "Legal Solutions",
    headerText: `Navigating the legal landscape can be complex, but at Cyntonisca, we simplify it for businesses. From contract drafting to digital compliance, we offer expert legal services that protect your business and ensure regulatory adherence. Whether you're a startup or an established company, we provide tailored legal solutions that support your growth and operations.`,
    imgSrc: "/legal-solutions.png",
    offeringsText: `We specialize in legal services for businesses operating in the digital space. Our focus is on compliance, contract management, and protecting intellectual property, so you can operate with confidence.`,
    offerings: [
      {
        title: "Business Contracts & Agreements",
        description: `We draft and review contracts to protect your business interests, ensuring clarity and legal compliance in every agreement.`
      },
      {
        title: "Data Privacy",
        description: `Stay compliant with data protection laws like GDPR, CCPA, and other regulations. We help businesses establish policies that safeguard customer data and reduce legal risks.`
      },
      {
        title: "Intellectual Property Protection",
        description: `From trademarks to software licenses, we assist in protecting your intellectual property, ensuring your brand and digital assets remain secure.`
      }
    ]
  }
};

type Props = {
  params: Promise<{ title: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = (await params).title;
  const pageData = data[title];

  return {
    title: `Cyntonisca | ${pageData.title}`,
    description: `${pageData.headerText}`,
    metadataBase: new URL("https://www.cyntonisca.com"),

    keywords:
      "lawyer website,law tech,software development,devops,web agency,devops,web agency,fullstack development,cloud computing,AI,ML,Artificial Intelligence",

    openGraph: {
      title: "Cyntonisca | Where Technology Meets Legal Excellence",
      description: `${pageData.headerText}`,
      type: "website",
      url: `https://www.cyntonisca.com/services/${pageData.title}`,
      images: [
        {
          url: pageData.imgSrc,
          width: 150,
          height: 150
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `Cyntonisca | ${pageData.title}`,
      description: `${pageData.headerText}`,
      images: [pageData.imgSrc]
    }
  };
}

export default async function page({
  params
}: Readonly<{ params: Promise<{ title: string }> }>) {
  const title = (await params).title;
  const pageData = data[title];

  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <section className="grid lg:grid-cols-2 min-h-[50vh]">
        <div className="bg-bgBlack h-full flex flex-col justify-center pl-5 md:pl-[15px] lg:pl-[25px] xl:pl-[50px] py-20 lg:py-0">
          <h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-bold text-white">
            {pageData.title}
          </h2>
          <p className="text-[1.8rem] mt-6 w-[90%] text-white ">
            {pageData.headerText}
          </p>
          <Link href="/contact">
            <AppButton
              label="Get In Touch"
              fullyRounded
              classname="bg-primary !text-white  !w-max px-[40px] mt-[20px] !text-[1.7rem]"
            />
          </Link>
        </div>
        <div className="h-full w-full overflow-hidden">
          <Image
            src={pageData.imgSrc}
            width={300}
            height={300}
            alt="Tech Lawyered"
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      </section>
      <section className="flex flex-col items-center py-16 px-5 md:px-0">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-bold text-center text-[#010D30]">
            {pageData.title} Offerings
          </h2>
          <p className="text-gray-500 text-[1.7rem] font-medium text-center md:w-[60%]">
            {pageData.offeringsText}
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-[95%] xl:w-[90%] min-[1281px]:w-[80%] grid lg:grid-cols-3 mt-10 md:mt-24 gap-10">
          {pageData.offerings.map((d: any) => (
            <div
              key={d.title}
              className="p-8 rounded-2xl bg-white drop-shadow-xl"
            >
              <div className="w-[65px] h-[65px] bg-[#DFFAFF] rounded-xl flex items-center justify-center">
                {title === "web-dev" && <WebDev />}
                {title === "mobile-dev" && <MobileDev />}
                {title === "legal-solutions" && <Legal />}
              </div>
              <div className="mt-5">
                <h5 className="text-[2rem] xl:text-[3rem] font-hubot font-semibold text-textBlack">
                  {d.title}
                </h5>
                <p className="mt-3 text-[2rem] text-textBlack">
                  {d.description}
                </p>
                <Link href="/contact">
                  <AppButton
                    fullyRounded
                    label="Learn more"
                    classname="bg-transparent border border-primary !text-bgBlack  px-[30px] w-max mt-8 !text-[1.7rem]"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {title === "legal-solutions" && (
        <>
          <section className="flex flex-col items-center py-16 px-5 md:px-0">
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <h2 className="text-[2rem] md:text-[4rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-center text-[#010D30]">
                Built for Law Firms and Lawyers, by Cyntonisca
              </h2>
              <p className="text-gray-500 text-[1.7rem] font-medium text-center md:w-[60%]">
                We designed and developed this case management tool to help
                legal professionals handle cases, documents, deadlines, and
                communications—all from one powerful dashboard.
              </p>
            </div>
            <div className=" mt-12 flex items-center justify-center">
              <div className="md:w-[90%] overflow-hidden rounded-3xl drop-shadow-xl">
                <Image
                  width={1000}
                  height={1000}
                  alt="Tech Lawyered"
                  className="w-full h-full object-cover"
                  priority={true}
                  src={"/case-management.png"}
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center py-16 px-5 md:px-0">
            <div className="flex flex-col gap-y-4 items-center justify-center">
              <h2 className="text-[2rem] md:text-[4rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-center text-[#010D30]">
                TeleCourt: Virtual Justice, Engineered by Us
              </h2>
              <p className="text-gray-500 text-[1.7rem] font-medium text-center md:w-[60%]">
                Our custom-built virtual court platform brings the courtroom
                online—secure, reliable, and easy to use for judges, lawyers,
                and litigants.
              </p>
            </div>
            <div className=" mt-12 flex items-center justify-center">
              <div className="md:w-[90%] overflow-hidden rounded-3xl drop-shadow-xl">
                <Image
                  width={1000}
                  height={1000}
                  alt="Cyntonisca"
                  className="w-full h-full object-cover"
                  priority={true}
                  src={"/virtual-court.png"}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
