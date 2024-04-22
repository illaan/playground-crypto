import React from "react";
import ThemeToggle from "./ThemeToggle";

function Footer() {
	return (
		<div className="rounded-div mt-8 pt-8 text-primary">
			<div className="grid grid-cols-2 w-full text-center md:flex flex-col  ">
				<div className="md:flex flex-col border-b pb-6">
					<h2 className="font-bold">Support</h2>
					<ul className="md:flex gap-2 justify-between mx-24">
						<li className="text-sm py-2">Help Center</li>
						<li className="text-sm py-2">Contact Us</li>
						<li className="text-sm py-2">API Status</li>
						<li className="text-sm py-2">Documentation</li>
					</ul>
				</div>
				<div className="md:flex flex-col border-b py-6">
					<h2 className="font-bold">Info</h2>
					<ul className="md:flex gap-5 justify-between mx-24">
						<li className="text-sm py-2">About Us</li>
						<li className="text-sm py-2">Careers</li>
						<li className="text-sm py-2">Invest</li>
						<li className="text-sm py-2">Legal</li>
					</ul>
				</div>
			</div>
			<p className="text-center py-4">Powered by Coin Gecko</p>
		</div>
	);
}

export default Footer;
