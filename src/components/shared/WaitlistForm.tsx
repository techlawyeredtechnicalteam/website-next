"use client";
import React, { useState } from "react";
import AppButton from "./AppButton";
import { div } from "framer-motion/client";
import { Formik, Form } from "formik";
import AppInput from "./AppInput";
import * as Yup from "yup";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { ApiInstance } from "@/utils/api-instance";

const schema = Yup.object().shape({
	email: Yup.string().required(),
	fullName: Yup.string().required(),
	isLawyer: Yup.string().required().oneOf(["Yes", "No"]),
	yearsPostCall: Yup.number().optional(),
	phoneNumber: Yup.string().optional(),
	SCN: Yup.string().optional(),
});

export default function WaitlistForm() {
	const [isJoining, setIsJoining] = useState(false);
	const { showAndHideAlert } = useAlert();

	return (
		<>
			<p className="text-gray-500 text-[1.7rem] font-medium md:w-[90%]">
				All your legal work—organized, simplified, and right where you need it.
				Be the first to experience the future of case management. Join the
				waitlist today.
			</p>
			<Formik
				validationSchema={schema}
				initialValues={{
					email: "",
					fullName: "",
					isLawyer: "Yes",
					yearsPostCall: 0,
					phoneNumber: "",
					SCN: "",
				}}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					try {
						const newValues = {
							...values,
							isLawyer: values.isLawyer === "Yes",
						};
						await ApiInstance.post("/api/waitlist", newValues);
						setSubmitting(false);
						showAndHideAlert({
							message: "Thank you for joining the waitlist.",
							type: "success",
						});
						resetForm();
					} catch (error) {
						const err = error as AxiosError<any>;
						showAndHideAlert({
							message: err.response?.data.message ?? err.message,
							type: "error",
						});
					}
				}}>
				{({ values, isSubmitting }) => (
					<Form className="w-full flex flex-col gap-y-5">
						<AppInput
							label="Full Name"
							placeholder="Your Full Name"
							name="fullName"
						/>
						<AppInput
							label="Email Address"
							placeholder="Your Email Address"
							name="email"
						/>
						<AppInput.Select
							label="Are You a Lawyer"
							placeholder="Your Email Address"
							name="isLawyer"
							options={["Yes", "No"]}
						/>
						{values.isLawyer === "Yes" && (
							<AppInput
								label="How many years post call ?"
								placeholder="How many years post call ?"
								name="yearsPostCall"
								type="number"
							/>
						)}
						<AppInput
							label="Phone Number(optional)"
							placeholder="Your Phone Number"
							name="phoneNumber"
						/>
						{values.isLawyer === "Yes" && (
							<AppInput label="SCN(optional)" placeholder="SCN" name="SCN" />
						)}
						<AppButton
							label="Join the waitlist"
							fullyRounded
							type="submit"
							showLoading={isSubmitting}
							classname="bg-primary !text-secondary  !w-max px-[40px] mt-[20px] !text-[1.7rem]"
						/>
					</Form>
				)}
			</Formik>
		</>
	);
}
