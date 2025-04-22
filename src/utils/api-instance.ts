import axios, { InternalAxiosRequestConfig } from "axios";
import { getTokens } from "./cookies";

export const ApiInstance = axios.create({
	baseURL: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
});

ApiInstance.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		const { accessToken } = await getTokens();

		// Add tokens to  header if it exists
		if (accessToken) {
			config.headers["accessToken"] = `${accessToken}`;
		}

		return config;
	},
	(error: any) => {
		return Promise.reject(error);
	}
);
