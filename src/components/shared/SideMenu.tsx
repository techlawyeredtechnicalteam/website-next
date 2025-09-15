"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import Image from "next/image";
import CloseIcon from "./icons/CloseIcon";
import Accordion from "./Accordion";

export default function SideMenu() {
  const pathname = usePathname();

  const isServices = pathname === "/services";
  const isSupport = pathname === "/support";
  const isAbout = pathname === "/about";
  const isBlog = pathname === "/blog";

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-[35px] h-[35px] lg:hidden"
      >
        <HamburgerIcon />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="fixed top-0 left-0 h-screen z-[3] bg-bgBlack w-full py-10"
          >
            <div className="flex items-center justify-between px-5">
              <Link onClick={() => setOpen(false)} href={"/"}>
                <Image
                  src={"/logo.png"}
                  width={100}
                  height={80}
                  alt="Cyntonisca"
                  priority={true}
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className={`flex items-center justify-center w-[45px] h-[45px] [#ffffff60] rounded-full`}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col gap-y-10 px-5 mt-20">
              <Accordion
                renderButton={({ setOpen, open }) => (
                  <button
                    onClick={() => setOpen(!open)}
                    className={`text-[4rem] font-bold ${
                      pathname.startsWith("/services")
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    Services
                  </button>
                )}
              >
                <div className="flex flex-col gap-y-6">
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/services/web-dev"}
                    className={`text-[2rem] text-white px-6`}
                  >
                    Web Development
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/services/mobile-dev"}
                    className={`text-[2rem] text-white px-6`}
                  >
                    Mobile Development
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href={"/services/legal-solutions"}
                    className={`text-[2rem] text-white px-6`}
                  >
                    Legal Solutions
                  </Link>
                </div>
              </Accordion>
              <Link
                href={"/about"}
                onClick={() => setOpen(false)}
                className={`text-[4rem] font-bold ${
                  isAbout ? "text-secondary" : "text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href={"/contact"}
                onClick={() => setOpen(false)}
                className={`text-[4rem] font-bold ${
                  isSupport ? "text-secondary" : "text-white"
                }`}
              >
                Support
              </Link>
              <Link
                href={"/blog"}
                onClick={() => setOpen(false)}
                className={`text-[4rem] font-bold ${
                  isBlog ? "text-secondary" : "text-white"
                }`}
              >
                Our Blog
              </Link>
            </div>
            <nav className="px-5 mt-10 flex flex-wrap items-center gap-6 md:gap-10">
              <Link
                href={"/privacy-policy"}
                className="text-[1.7rem]  text-white"
              >
                Privacy Policy
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
