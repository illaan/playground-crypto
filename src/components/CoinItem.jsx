import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function CoinItem({ coin }) {
	const [savedCoin, setSavedCoin] = useState(false);
	const { user } = UserAuth();

	const coinPath = doc(db, "users", `${user?.email}`);

	const saveCoin = async () => {
		if (user?.email) {
			setSavedCoin(true);
			await updateDoc(coinPath, {
				watchlist: arrayUnion({
					id: coin.id,
					name: coin.name,
					image: coin.image,
					rank: coin.market_cap_rank,
					symbol: coin.symbol,
				}),
			});
		} else {
			alert("Please sign in to save a coin to your watchlist");
		}
	};
	return (
		<tr className="h-[80px] border-b overflow-hidden">
			<td onClick={saveCoin}>
				{savedCoin ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="orange"
						viewBox="0 0 24 24"
						strokeWidth={1}
						stroke="black"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
						/>
					</svg>
				) : (
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
							d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
						/>
					</svg>
				)}
			</td>
			<td>{coin?.market_cap_rank}</td>
			<td>
				<Link to={`/${coin.id}`}>
					<div className="flex items-center">
						<img
							className="w-6 mr-2 rounded-full"
							src={coin.image}
							alt={coin.id}
						/>
						<p className="hidden sm:table-cell">{coin.name}</p>
					</div>
				</Link>
			</td>
			<td>{coin?.symbol.toUpperCase()}</td>
			<td>${coin?.current_price.toLocaleString()}</td>
			<td
				className={`${
					coin.price_change_percentage_24h > 0
						? "text-green-600"
						: "text-red-600"
				}`}
			>
				{coin.price_change_percentage_24h.toFixed(2)}%
			</td>
			<td className="w-[180px] hidden md:table-cell">
				${coin?.total_volume.toLocaleString()}
			</td>
			<td className="w-[180px] hidden sm:table-cell">
				${coin?.market_cap.toLocaleString()}
			</td>
			<td>
				<Sparklines data={coin?.sparkline_in_7d.price}>
					<SparklinesLine color="teal" />
				</Sparklines>
			</td>
		</tr>
	);
}

export default CoinItem;
