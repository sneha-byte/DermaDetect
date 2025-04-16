import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
	return (
		<div className="flex flex-col min-h-full">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
}

export default MainLayout;
