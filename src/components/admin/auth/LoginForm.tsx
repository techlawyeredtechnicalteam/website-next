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
import { useRootStore } from "@/components/shared/providers/RootProvider";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
	email: Yup.string().required(),
	password: Yup.string().required(),
});

interface LoginData {
	email: string;
	password: string;
}

export default function LoginForm() {
	const { showAndHideAlert } = useAlert();
	const { setUser } = useRootStore();
	const router = useRouter();

	const initialValues: LoginData = {
		email: "",
		password: "",
	};

	async function submitHandler(
		values: LoginData,
		{ setSubmitting, resetForm }: FormikHelpers<LoginData>
	) {
		try {
			const res = await ApiInstance.post("/api/admin/login", values);
			await setTokens(res.data.token);
			setUser(res.data.user);
			showAndHideAlert({
				message: res.data.message,
				type: "success",
			});
			setSubmitting(false);

			router.replace("/admin");
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
		<Formik
			validationSchema={schema}
			onSubmit={submitHandler}
			initialValues={initialValues}>
			{({ values, errors, isSubmitting }) => (
				<Form className="flex flex-col gap-y-5">
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
