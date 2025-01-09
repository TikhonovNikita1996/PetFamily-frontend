import { createBrowserRouter } from "react-router";
import MainLayout from "../components/MainLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout/>,
		children: [
			{
				path: "pets",
				element: <div>Pets</div>
			},
			{
				path: "volunteers",
				element: <div>Volunteers</div>
			},
			{
				path: "profile",
				element: <div>Profile</div>
			},
			{
				path: "login",
				element: <div>Log In</div>
			},
		]
	}
]);