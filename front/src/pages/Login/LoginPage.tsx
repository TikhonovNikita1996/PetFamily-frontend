import { Button, Skeleton, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useAuth } from "../../contexts/auth/useAuth";
import { AccountService } from "../../api/accounts";
import { useState } from "react";
import { api } from "../../api/api";

type LoginFields = {
	email: string;
	password: string;
};

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFields>();

	const { login, accessToken } = useAuth();
	const onSubmit = async (data: LoginFields) => {
		await login(data.email, data.password);
	};

	const [isLoading, setLoading] = useState(false);

	return (
		<>
			{isLoading ? (
				<Skeleton animation="wave" />
			) : (
				<div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
					<NavLink to="/" className="text-lg">
						← Обратно на главную
					</NavLink>

					<div>Access Token {accessToken}</div>

					<div className="flex flex-col flex-1 min-w-80 mx-auto justify-center items-center gap-9">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col w-full items-center gap-7"
						>
							<TextField
								variant="standard"
								label="Email"
								error={!!errors.email}
								helperText={errors.email?.message}
								fullWidth
								{...register("email", {
									required: "Неверная почта",
									validate: (value) => {
										if (!value.includes("@")) {
											return "Email должен содержать @";
										}
									},
								})}
							/>
							<TextField
								type="password"
								variant="standard"
								label="Пароль"
								error={!!errors.password}
								helperText={errors.password?.message}
								fullWidth
								{...register("password", {
									required: "Это поле обязательно для заполнения",
								})}
							/>
							<Button type="submit">Войти</Button>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
