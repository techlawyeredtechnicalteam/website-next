"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface Alert {
	show?: boolean;
	message: string;
	type: "error" | "success";
}

export interface User {
	email: string;
	fullName: string;
	id: string;
	profilePicture?: string;
}

interface RootStore {
	alert: Alert;
	setAlert(alert: Alert): void;
	user: User | null;
	setUser: (val: User | null) => void;
}

const RootContext = createContext<StoreApi<RootStore> | null>(null);
const queryClient = new QueryClient();

const createRootStore = ({ user }: { user: User | null }) =>
	createStore<RootStore>()((set) => ({
		alert: {
			show: false,
			message: "A initial message",
			type: "success",
		},
		user: user,

		setAlert: (val) => set((state) => ({ ...state, alert: val })),
		setUser: (val) => set((state) => ({ ...state, user: val })),
	}));

const RootProvider = ({
	children,
	user,
}: PropsWithChildren & { user: User | null }) => {
	const rootStoreRef = useRef<StoreApi<RootStore> | null>(null);
	rootStoreRef.current = createRootStore({ user });

	return (
		<QueryClientProvider client={queryClient}>
			<RootContext.Provider value={rootStoreRef.current}>
				{children}
			</RootContext.Provider>
		</QueryClientProvider>
	);
};

export const useRootStore = () => {
	const ctxStore = useContext(RootContext);
	return useStore(ctxStore!, (state) => state);
};

export default RootProvider;
