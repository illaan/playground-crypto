import React from "react";
import CoinSearch from "../components/CoinSearch";
import { useLoaderData } from "react-router-dom";

export async function loader() {
	const options = { method: "GET", headers: { accept: "application/json" } };
	try {
		const response = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true",
			options
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}
function Home() {
	const coins = useLoaderData();
	return (
		<div>
			<CoinSearch coins={coins} />
		</div>
	);
}

export default Home;
