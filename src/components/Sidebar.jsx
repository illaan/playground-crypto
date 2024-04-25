import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { UserAuth } from "../context/AuthContext";

function Sidebar() {
	const { user, logOut } = UserAuth();
	const handleSignOut = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div className="md:hidden w-full  flex flex-grow flex-col items-start gap-8 mt-12 px-7 animate__animated animate__fadeInRight ">
			<Link to="/" className="pb-5 border-b w-full">
				Home
			</Link>
			<Link to="/account" className="pb-5 border-b w-full">
				Account
			</Link>
			<ThemeToggle />
			{user ? (
				<div className="fixed flex-col bottom-6 left-4 right-4 flex justify-center gap-3 ">
					<button
						onClick={handleSignOut}
						className="py-2 px-5 w-full font-semibold text-red-600 hover:text-accent cursor-pointer border border-secondary rounded-2xl shadow-xl bg-primary"
					>
						Sign Out
					</button>
				</div>
			) : (
				<div className="fixed flex-col bottom-6 left-4 right-4 flex justify-center gap-3 ">
					<Link to="/signin">
						<button className="py-2 px-5 w-full font-semibold texthover:text-accent cursor-pointer border border-secondary rounded-2xl shadow-xl bg-primary">
							Sign In
						</button>
					</Link>

					<Link to="/signup">
						<button className="px-5 py-2 w-full bg-button font-semibold text-btnText rounded-full shadow-lg hover:shadow-2xl cursor-pointer">
							Sign Up
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Sidebar;
