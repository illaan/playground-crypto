import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import { useLoaderData } from "react-router-dom";

export async function loader() {
	const options = { method: "GET", headers: { accept: "application/json" } };

	const url1 =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true";
	const url2 = "https://api.coingecko.com/api/v3/search/trending";
	try {
		const [response1, response2] = await Promise.all([
			fetch(url1, options),
			fetch(url2, options),
		]);

		const data1 = await response1.json();
		const data2 = await response2.json();
		console.log(data1);
		console.log(data2);

		return { data1, data2 };
	} catch (err) {
		console.error(err);
		return err;
	}
}
function Home() {
	const loaderData = useLoaderData();
	console.log(loaderData); // Check what exactly is being returned by the loader

	const {
		data1: coins = [],
		data2: { coins: trendingCoins } = { coins: [] }, // Provides a default empty array if data2 or coins is undefined
	} = loaderData;

	return (
		<div>
			<CoinSearch coins={coins} />
			<Trending trendingCoins={trendingCoins} />
		</div>
	);
}

export default Home;
