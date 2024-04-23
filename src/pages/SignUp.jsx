import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { signUp } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password);
			navigate("/account");
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};

	return (
		<div>
			<div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
				<h1 className="text-2xl font-bold">Sign Up</h1>
				{error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
				<form onSubmit={handleSubmit}>
					<div className="my-4">
						<label>Email</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								onChange={(e) => setEmail(e.target.value)}
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="email"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="gray"
								className="w-4 h-4 absolute right-4 top-3"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
						</div>
					</div>
					<div className="my-4">
						<label>Password</label>
						<div className="my-2 w-full relative rounded-2xl shadow-xl">
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="w-full p-2 bg-primary border border-input rounded-2xl"
								type="password"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="gray"
								className="w-4 h-4 absolute right-4 top-3"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
								/>
							</svg>
						</div>
					</div>
					<button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
						Sign up
					</button>
				</form>
				<p className="my-4">
					Already have an account?{" "}
					<Link to="/signin" className="text-accent">
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
