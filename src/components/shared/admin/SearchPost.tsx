"use client";
import React from "react";
import SearchIcon from "../icons/SearchIcon";
import { Formik, Form, Field } from "formik";

export default function SearchPost({
	background = "#FFFFFF1C",
	borderColor = "transparent",
	setSearch = (val: string) => {},
}) {
	return (
		<Formik
			initialValues={{ search: "" }}
			onSubmit={(val) => {
				setSearch(val.search);
			}}>
			{() => (
				<div className="w-full md:w-max">
					<Form className="w-full">
						<div
							style={{ background, borderColor }}
							className="w-full md:w-[255px] h-[45px] flex items-center px-5 backdrop-blur-[3.75px] rounded-xl transiton-all duration-200 focus-within:!border-primary border-transparent border-[1.5px] gap-x-3">
							<SearchIcon />
							<Field
								type="search"
								placeholder="Search"
								className="grow h-full outline-0 bg-transparent text-2xl"
								name="search"
							/>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	);
}
