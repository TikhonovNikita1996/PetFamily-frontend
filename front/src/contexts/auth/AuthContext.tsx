import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { AccountService } from "../../api/accounts";
import { api } from "../../api/api";
import { User } from "../../app/models/User";

type AuthContexType = {
	accessToken: string | undefined;
	user: User | undefined;
	login: (email: string, password: string) => Promise<void>;
};

export const AuthContex = createContext<AuthContexType | undefined>(undefined);

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
	const [accessToken, setAccessToken] = useState<string | undefined>();
	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		const accessTokenInterceptor = api.interceptors.request.use((config) => {
			config.headers.Authorization = accessToken
				? `Bearer ${accessToken}`
				: config.headers.Authorization;
			return config;
		});
		return () => {
			api.interceptors.response.eject(accessTokenInterceptor);
		};
	}, [accessToken]);

	useLayoutEffect(() => {
		const refreshInterceptor = api.interceptors.response.use(
			(config) => config,
			async (error) => {
				if (error.response.status === 401) {
					const originalRequest = error.config;
					try {
						const response = await AccountService.refresh();
						setAccessToken(response.data.result?.accessToken);
						setUser({
							email: response.data.result?.email,
							id: response.data.result?.id,
						} as User);

						originalRequest.headers.Authorization = `Bearer ${response.data.result?.accessToken}`;

						return api(originalRequest);
					} catch {
						setAccessToken(undefined);
					}
				}
				return Promise.reject(error);
			}
		);
		return () => {
			api.interceptors.response.eject(refreshInterceptor);
		};
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const response = await AccountService.login(email, password);
			setAccessToken(response.data.result!.accessToken);
		} catch {
			console.log("error");
		}
	};

	return (
		<AuthContex.Provider value={{ accessToken, user, login }}>
			{children}
		</AuthContex.Provider>
	);
};
