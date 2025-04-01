import React from "react";

export default function TwitterXIcon({ className = "fill-secondary" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none">
			<g clipPath="url(#clip0_116_27)">
				<mask
					id="mask0_116_27"
					style={{
						maskType: "luminance",
					}}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="25"
					height="25">
					<path d="M25 0H0V25H25V0Z" fill="white" />
				</mask>
				<g mask="url(#mask0_116_27)">
					<path
						d="M22.0703 0H2.92969C1.31167 0 0 1.31167 0 2.92969V22.0703C0 23.6883 1.31167 25 2.92969 25H22.0703C23.6883 25 25 23.6883 25 22.0703V2.92969C25 1.31167 23.6883 0 22.0703 0Z"
						className={className}
					/>
					<path
						d="M17.3781 4.88281H19.9625L14.3164 11.3359L20.9586 20.1172H15.7578L11.6844 14.7914L7.02346 20.1172H4.43755L10.4766 13.2148L4.10474 4.88281H9.43752L13.1196 9.75078L17.3781 4.88281ZM16.4711 18.5703H17.9031L8.6594 6.34844H7.12268L16.4711 18.5703Z"
						className={
							className.includes("secondary") ? "fill-bgBlack" : "fill-white"
						}
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_116_27">
					<rect width="25" height="25" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
