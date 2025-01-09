import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import VolunteersPage from "../pages/Volunteers/VolunteersPage";
import HelpAnimalsPage from "../pages/Help-animals/HelpAnimalsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout/>,
		children: [
			{
				path: "pets",
				element: <HelpAnimalsPage/>
			},
			{
				path: "volunteers",
				element: <VolunteersPage/>
			},
			{
				path: "profile",
				element: <ProfilePage/>
			},
			{
				path: "login",
				element: <LoginPage/>
			},
		],
		errorElement : ErrorPage()
	}
]);