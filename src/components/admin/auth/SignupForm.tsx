"use client";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import useAlert from "@/hooks/useAlert";
import { ApiInstance } from "@/utils/api-instance";
import { AxiosError } from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";
import { setTokens } from "@/utils/cookies";
import AppLoader from "@/components/shared/AppLoader";

const schema = Yup.object().shape({
	email: Yup.string().required(),
	password: Yup.string().required(),
});

interface SignupData {
	email: string;
	password: string;
	fullName: string;
}

export default function SignupForm() {
	const { showAndHideAlert } = useAlert();

	const initialValues: SignupData = {
		email: "",
		password: "",
		fullName: "",
	};

	async function submitHandler(
		values: SignupData,
		{ setSubmitting, resetForm }: FormikHelpers<SignupData>
	) {
		try {
			const res = await ApiInstance.post("/api/admin/signup", values);
			console.log(res.data);
			showAndHideAlert({
				message: res.data.message,
				type: "success",
			});
			setSubmitting(false);
			resetForm();
		} catch (error) {
			const err = error as AxiosError<any>;
			showAndHideAlert({
				message: err.response?.data.message ?? err.message,
				type: "error",
			});
			setSubmitting(false);
		}
	}

	return (
		<Formik onSubmit={submitHandler} initialValues={initialValues}>
			{({ values, errors, isSubmitting }) => (
				<Form className="flex flex-col gap-y-5">
					<AppInput
						name="fullName"
						label="Full Name"
						placeholder="Enter your name"
					/>
					<AppInput
						name="email"
						label="Email Address"
						placeholder="Enter your email address"
					/>
					<AppInput.Password
						name="password"
						label="Password"
						placeholder="********"
					/>
					<AppButton
						showLoading={isSubmitting}
						type="submit"
						className="!bg-secondary w-full !text-primary">
						<span>Submit</span>
					</AppButton>
				</Form>
			)}
		</Formik>
	);
}
