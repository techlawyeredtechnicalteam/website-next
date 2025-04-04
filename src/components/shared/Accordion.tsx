"use client";
import React, { useState, useRef, Dispatch, PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { useClickAway } from "@uidotdev/usehooks";

type RenderButtonParams = {
	setOpen: Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
};

type AccordionProps = {
	renderButton: (val: RenderButtonParams) => React.JSX.Element;
};

export default function Accordion({
	renderButton,
	children,
}: PropsWithChildren & AccordionProps) {
	const [open, setOpen] = useState(false);

	const containerRef = useClickAway<HTMLDivElement>(() => {
		setOpen(false);
	});

	return (
		<motion.div ref={containerRef} className="">
			{renderButton({ setOpen, open })}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ scaleY: 0 }}
						animate={{
							scaleY: 1,
							transformOrigin: "top",
							transition: {
								duration: 0.6,
								type: "spring",
								bounce: 0.6,
							},
						}}
						className="pt-6">
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
