import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		// Close the sidebar on route changes
		setIsOpen(false);
	}, [location]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};
		// Add event listener for window resize events
		window.addEventListener("resize", handleResize);
		// Remove event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className="flex flex-col h-screen">
			<Navbar toggleSidebar={toggleSidebar} />
			{isOpen ? <Sidebar /> : <Outlet />}
		</div>
	);
}

export default Layout;
