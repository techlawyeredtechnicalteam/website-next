"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideMenu from "./SideMenu";
import Dropdown from "./Dropdown";

export default function Header() {
  const pathname = usePathname();

  const isServices = pathname === "/services";
  const isSupport = pathname === "/contact";
  const isAbout = pathname === "/about";
  const isBlog = pathname === "/blog";

  return (
    <header className="h-[100px] bg-bgBlack px-5 md:px-[15px] lg:px-[25px] xl:px-[50px] flex items-center justify-between sticky top-0 z-[10]">
      <Link href={"/"}>
        <Image src={"/logo.png"} width={100} height={80} alt="Cyntonisca" />
      </Link>
      <nav className="hidden lg:flex items-center gap-10">
        <Dropdown
          renderButton={({ open, setOpen }) => (
            <button
              onClick={() => setOpen(!open)}
              className={`text-[1.7rem] ${
                pathname.startsWith("/services")
                  ? "text-secondary"
                  : "text-white"
              } cursor-pointer`}
            >
              Services
            </button>
          )}
          items={[
            { title: "Web Development", href: "/services/web-dev" },
            { title: "Mobile Development", href: "/services/mobile-dev" },
            { title: "Legal Solutions", href: "/services/legal-solutions" }
          ]}
          renderItem={({ item, setOpen, index }) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-[1.7rem] py-5 px-6 border-b last:border-0 border-b-gray-200 hover:bg-[#f5f5f5] transition-all duration-200`}
            >
              {item.title}
            </Link>
          )}
          dropdownWidth="300px"
        />
        <Link href={"/about"} className="text-[1.7rem]  text-white">
          {isAbout ? (
            <mark className="markerb bg-transparent text-secondary">
              About Us
            </mark>
          ) : (
            "About Us"
          )}
        </Link>
        <Link href={"/contact"} className="text-[1.7rem]  text-white">
          {isSupport ? (
            <mark className="markerb bg-transparent text-secondary">
              Contact
            </mark>
          ) : (
            "Contact"
          )}
        </Link>
        <Link href={"/blog"} className="text-[1.7rem]  text-white">
          {isBlog ? (
            <mark className="markerb bg-transparent text-secondary">
              Our Blog
            </mark>
          ) : (
            "Our Blog"
          )}
        </Link>
      </nav>
      <SideMenu />
    </header>
  );
}
