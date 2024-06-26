import React from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Account = () => {
	const { user } = UserAuth();

	if (user) {
		return (
			<div className="rounded-div my-4">
				<div className="flex justify-between items-center my-12 py-8 rounded-div">
					<div>
						<h1 className="text-2xl font-bold">Account</h1>
						<div>
							<p>Welcome, {user?.email}</p>
						</div>
					</div>
				</div>
				<div className="flex justfiy-between items-center my-12 py-8 rounded-div">
					<div className="w-full min-h-[300px]">
						<h1 className="text-2xl font-bold py-4">Watch List</h1>
						<SavedCoin />
					</div>
				</div>
			</div>
		);
	} else {
		return <Navigate to="/signin" />;
	}
};

export default Account;
