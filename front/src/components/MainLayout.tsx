import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout() {
	return (
		<div className="h-screen flex flex-col sm:px-4">
			<Header />
			<div className="flex flex-col h-full px-4 sm:px-2 py-4 sm:py-2">
				<Outlet/>
			</div>
			<Footer/>
		</div>
	);
}
