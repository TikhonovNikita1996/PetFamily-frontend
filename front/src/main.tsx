import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router";
import { router } from "./app/router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/auth/AuthContext";

createRoot(document.getElementById("root")!).render(
	<>
		<AuthProvider>
			<RouterProvider router={router}/>
			<ToastContainer/>
		</AuthProvider>
	</>
);
