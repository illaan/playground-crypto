import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { UserAuth } from "../context/AuthContext";

function Navbar({ toggleSidebar }) {
	const [nav, setNav] = useState(false);

	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div className="flex border border-secondary rounded-2xl shadow-xl bg-primary justify-between py-6 px-4 w-full mb-6 ">
			<Link to="/">
				<h1 className="text-2xl font-bold cursor-pointer">Cryptobase</h1>
			</Link>
			<div className="hidden md:flex ">
				<ThemeToggle />
			</div>

			<div
				className="flex
      "
			>
				{user?.email ? (
					<div className="hidden  md:flex gap-2">
						<Link
							to="/account"
							className="py-2 px-5 font-semibold texthover:text-accent cursor-pointer"
						>
							Account
						</Link>
						<button
							onClick={handleSignOut}
							className="px-5 py-2 bg-button font-semibold text-btnText rounded-full shadow-lg hover:shadow-2xl cursor-pointer"
						>
							Sign Out
						</button>
					</div>
				) : (
					<div className="hidden  md:flex gap-2">
						<Link to="/signin">
							<button className="py-2 px-5 font-semibold texthover:text-accent cursor-pointer">
								Sign In
							</button>
						</Link>

						<Link to="/signup">
							<button className="px-5 py-2 bg-button font-semibold text-btnText rounded-full shadow-lg hover:shadow-2xl cursor-pointer">
								Sign Up
							</button>
						</Link>
					</div>
				)}
				<div
					onClick={toggleSidebar}
					className="block md:hidden cursor-pointer z-10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
