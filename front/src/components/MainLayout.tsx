import { Outlet } from "react-router";
import { ContentBlock } from "./ContentBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export type Props = {
	children: React.ReactNode;
};

export default function MainLayout() {
	return (
		<div className="h-screen flex flex-col sm:px-4">
			<Header />
			<main className="flex flex-col h-full px-2 sm:px-2 py-2 sm:py-2">
				<ContentBlock>
					<Outlet />
				</ContentBlock>
			</main>
			<Footer />
		</div>
	);
}
