import { Button, Skeleton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useAuth } from "../../contexts/auth/useAuth";

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
	const preventDefault = (event: React.SyntheticEvent) =>
		event.preventDefault();
	return (
		<>
			{isLoading ? (
				<Skeleton animation="wave" />
			) : (
				<div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
					<NavLink to="/" className="text-lg">
						← Обратно на главную
					</NavLink>
					<div className="flex flex-col flex-1 min-w-80 mx-auto justify-center items-center gap-8">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col w-full items-center gap-5"
						>
							<Typography
								fontWeight="fontWeightBold"
								variant="h4"
								textAlign="center"
							>
								Вход
							</Typography>
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
							<Button type="submit" variant="contained" size="large">
								Войти
							</Button>
						</form>
						<div>
							<NavLink to="/register" className="text-sm text-white-500">
								Нет аккаунта? Зарегистрируйтесь
							</NavLink>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
