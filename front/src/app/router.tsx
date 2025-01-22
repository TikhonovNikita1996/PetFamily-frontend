import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HelpAnimalsPage from "../pages/Help-animals/HelpAnimalsPage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import VolunteersPage from "../pages/Volunteers/VolunteersPage";

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "pets",
				element: <HelpAnimalsPage />,
			},
			{
				path: "volunteers",
				element: <VolunteersPage />,
			},
			{
				path: "profile",
				element: <ProfilePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "register",
				element: <RegistrationPage />,
			},
		],
		errorElement: ErrorPage(),
	},
]);
