import React from "react";
import Image from "next/image";
import TestimonialCard from "@/components/shared/TestimonialCard";
import AppButton from "@/components/shared/AppButton";

const testimonials = [
  {
    comment:
      "Cyntonisca helped us launch our digital case system in record time. They truly understand the intersection of tech and law.",
    authorImage:
      "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?t=st=1744219217~exp=1744222817~hmac=e959f6297d12335e2cf0b292175402db346cd3e71ad55ebc3a9e39b38f7ce410&w=2000",
    authorName: "Chinwe Okeke",
    authorRole: "Legal Practitioner"
  },
  {
    comment:
      "We needed a secure virtual court solution, and TechLawyered delivered beyond expectations. Smooth, intuitive, and reliable.",
    authorImage:
      "https://img.freepik.com/premium-photo/lego-man-with-glasses-beard_1067267-14172.jpg?w=1380",
    authorName: "Bamidele Adesina",
    authorRole: "Court Registrar"
  },
  {
    comment:
      "Our firm now runs faster and leaner thanks to their custom-built legal workflow tool. Highly recommended!",
    authorImage:
      "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?t=st=1744219217~exp=1744222817~hmac=e959f6297d12335e2cf0b292175402db346cd3e71ad55ebc3a9e39b38f7ce410&w=2000",
    authorName: "Zainab Mohammed",
    authorRole: "Managing Partner"
  },
  {
    comment:
      "From onboarding to deployment, the TechLawyered team was professional and very responsive to our needs.",
    authorImage:
      "https://img.freepik.com/premium-photo/lego-man-with-glasses-beard_1067267-14172.jpg?w=1380",
    authorName: "Emeka Uzoma",
    authorRole: "Tech-savvy Lawyer"
  },
  {
    comment:
      "Their legal tech tools have helped us digitize filings and communications with clients. Game changer!",
    authorImage:
      "https://img.freepik.com/premium-photo/lego-man-with-glasses-beard_1067267-14172.jpg?w=1380",
    authorName: "Ifeoma Ebere",
    authorRole: "Corporate Law Associate"
  },
  {
    comment:
      "Cyntonisca built a platform that now handles all our remote hearings. The user experience is top-notch.",
    authorImage:
      "https://img.freepik.com/premium-photo/lego-man-with-glasses-beard_1067267-14172.jpg?w=1380",
    authorName: "Musa Abdullahi",
    authorRole: "ICT Support Staff"
  },
  {
    comment:
      "Their dedication to building scalable, secure legal tech is unmatched. We’ll definitely partner again.",
    authorImage:
      "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?t=st=1744219217~exp=1744222817~hmac=e959f6297d12335e2cf0b292175402db346cd3e71ad55ebc3a9e39b38f7ce410&w=2000",
    authorName: "Ngozi Ani",
    authorRole: "Legal Innovation Specialist"
  },
  {
    comment:
      "What stood out for us was their ability to listen and turn our pain points into practical solutions.",
    authorImage:
      "https://img.freepik.com/premium-photo/lego-man-with-glasses-beard_1067267-14172.jpg?w=1380",
    authorName: "Oluwaseun Ajayi",
    authorRole: "Litigation Expert"
  },
  {
    comment:
      "Thanks to Cyntonisca, our registry processes are now fully digitized and easier for the public to access.",
    authorImage:
      "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?t=st=1744219217~exp=1744222817~hmac=e959f6297d12335e2cf0b292175402db346cd3e71ad55ebc3a9e39b38f7ce410&w=2000",
    authorName: "Rachael Onuoha",
    authorRole: "Court Clerk"
  },
  {
    comment:
      "We trust Cyntonisca for anything legal-tech. They just get it—simple, efficient, and secure delivery.",
    authorImage:
      "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?t=st=1744219217~exp=1744222817~hmac=e959f6297d12335e2cf0b292175402db346cd3e71ad55ebc3a9e39b38f7ce410&w=2000",
    authorName: "Tunde Akinwale",
    authorRole: "LegalTech Consultant"
  }
];

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
      <section className="py-24 bg-bgBlack">
        <div className="flex items-ceneter justify-center w-full mb-24">
          <h2 className="w-max text-center text-[3rem] md:text-[4rem] xl:text-[4rem] font-extrabold leading-[120%] text-white">
            Our Team
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[90%] xl:w-[70%] flex flex-col gap-y-5">
            <div className="flex flex-col md:flex-row  gap-5 pb-10 border-b border-b-[#73eaff50]">
              <div className="shrink-0 w-full h-[300px]  md:w-[300px] md:h-[300px]">
                <Image
                  src={"/founder.jpeg"}
                  width={1000}
                  height={700}
                  alt="Tech Lawyered"
                  className="object-cover object-top w-full h-full rounded-2xl shrink-0"
                />
              </div>
              <div>
                <div className="flex flex-col gap-y-1 mb-5">
                  <span className="text-[1.7rem] font-bold text-white">
                    Simbiat Lola
                  </span>
                  <span className="text-[1.5rem] text-secondary">
                    Founder & CEO
                  </span>
                </div>
                <p className="text-2xl text-white">
                  Simbiat Lola, founder and CEO of Cyntonisca Nig Ltd (est.
                  2023), combines expertise as both a lawyer and legal
                  technologist to revolutionize Nigeria's legal industry. Her
                  vision drives the creation of innovative solutions that
                  enhance access to justice through technology. <br /> <br />
                  Beyond leading Cyntonisca, Simbiat's commitment to pro bono
                  work reflects her belief that technological advancement should
                  democratize legal services. She provides strategic guidance to
                  startups, helping them navigate regulatory complexities while
                  building strong foundations. <br /> <br />
                  What truly distinguishes Simbiat is her ability to bridge
                  legal requirements with technological possibilities, ensuring
                  solutions that are both legally sound and effective. Under her
                  leadership, Cyntonisca continues to develop technologies that
                  streamline legal processes and open new pathways to justice.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-5 pb-10 border-b border-b-[#73eaff50]">
              <div className="shrink-0 w-full h-[300px]  md:w-[300px] md:h-[300px]">
                <Image
                  src={"/frontend-dev.jpeg"}
                  width={1000}
                  height={700}
                  alt="Tech Lawyered"
                  className="object-cover object-top w-full h-full rounded-2xl shrink-0"
                />
              </div>
              <div>
                <div className="flex flex-col gap-y-1 mb-5">
                  <span className="text-[1.7rem] font-bold text-white">
                    Jonah Emmanuel
                  </span>
                  <span className="text-[1.5rem] text-secondary">
                    Senior Frontend Developer
                  </span>
                </div>
                <p className="text-2xl text-white">
                  As a Frontend Developer, I’ve had the opportunity to build and
                  scale user-facing applications with a strong focus on
                  performance, accessibility, and seamless user experiences. I
                  specialize in technologies like React, TypeScript, Tailwind
                  CSS, and various UI frameworks, and I enjoy turning complex
                  ideas into clean, responsive, and intuitive interfaces. <br />{" "}
                  <br /> In my role as a Technical Team Lead, I’ve been
                  responsible for guiding a team of developers through project
                  planning, code reviews, and architectural decisions. I work
                  closely with product managers and designers to translate
                  business goals into technical solutions, while also mentoring
                  team members, encouraging best practices, and maintaining code
                  quality. Balancing hands-on development with team coordination
                  has strengthened my leadership skills and reinforced the
                  importance of clear communication and collaborative
                  problem-solving. <br /> <br /> Overall, I’m passionate about
                  building scalable front-end systems and creating environments
                  where developers can thrive.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 pb-10">
              <div className="shrink-0 w-full h-[300px]  md:w-[300px] md:h-[300px]">
                <Image
                  src={"/backend-dev.jpeg"}
                  width={1000}
                  height={700}
                  alt="Tech Lawyered"
                  className="object-cover object-top w-full h-full rounded-2xl shrink-0"
                />
              </div>
              <div>
                <div className="flex flex-col gap-y-1 mb-5">
                  <span className="text-[1.7rem] font-bold text-white">
                    Adams Muhammed
                  </span>
                  <span className="text-[1.5rem] text-secondary">
                    Backend Developer
                  </span>
                </div>
                <p className="text-2xl text-white">
                  I'm a passionate software engineer with over 5 years of
                  experience, specializing in frontend development and mobile
                  app development. I love writing clean, efficient code and have
                  worked extensively with Vue.js, Nuxt.js, React.js, Next.js,
                  Node.js, MongoDB, and even a bit of Django. My diverse skill
                  set helps me tackle a wide range of development challenges,
                  and I always adhere to best practices, ensuring my code is
                  thoroughly tested. <br /> <br /> In addition to my technical
                  expertise, I have a strong appreciation for UI/UX design. I
                  understand the importance of creating engaging, intuitive user
                  experiences and am committed to developing seamless
                  interactions and visually appealing interfaces. My goal is to
                  deliver high-quality solutions that not only meet project
                  requirements but also enhance user satisfaction and elevate
                  the overall user experience.
                </p>
              </div>
            </div>
          </div>
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
                {testimonials.slice(0, 5).map((d, i) => (
                  <TestimonialCard testimonial={d} key={i} />
                ))}
              </div>
              <div className="flex items-center gap-[1.5rem] w-max showcase">
                {testimonials.slice(5).map((d, i) => (
                  <TestimonialCard testimonial={d} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <div className="flex items-center gap-[1.5rem]">
              <div className="flex items-center gap-[1.5rem] w-max showcase-reverse">
                {testimonials.slice(0, 5).map((d, i) => (
                  <TestimonialCard testimonial={d} key={i} />
                ))}
              </div>
              <div className="flex items-center gap-[1.5rem] w-max showcase-reverse">
                {testimonials.slice(5).map((d, i) => (
                  <TestimonialCard testimonial={d} key={i} />
                ))}
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
