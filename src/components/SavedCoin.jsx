import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

function SavedCoin() {
	const [coins, setCoins] = useState([]);
	const { user } = UserAuth();

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
			setCoins(doc.data()?.watchlist);
		});
	}, [user.email]);

	const coinPath = doc(db, "users", `${user.email}`);
	const deleteCoin = async (passedId) => {
		try {
			const result = coins.filter((item) => item.id !== passedId);
			await updateDoc(coinPath, {
				watchlist: result,
			});
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div>
			{coins.length === 0 ? (
				<p>
					You dont have any saved coins. Please save coin toadd it to your watch
					list.<Link to="/">Click here to search coins</Link>
				</p>
			) : (
				<table className="w-full border-collapse text-center">
					<thead>
						<tr className="border-b">
							<th className="px-4">Rank #</th>
							<th className="text-left">Coin</th>
							<th className="text-left">Remove</th>
						</tr>
					</thead>
					<tbody>
						{coins.map((coin) => (
							<tr key={coin.id} className="h-[60px] overflow-hidden">
								<td>{coin?.rank}</td>
								<td>
									<Link to={`/${coin.id}`}>
										<div className="felx items-center">
											<img src={coin?.image} className="w-8 mr-4" alt="/" />
											<div>
												<p className="hidden sm:table-cell">{coin?.name}</p>
												<p className="text-gray-500 text-left text-sm">
													{coin?.symbol.toUpperCase()}
												</p>
											</div>
										</div>
									</Link>
								</td>
								<td className="pl-8">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 cursor-pointer"
										onClick={() => deleteCoin(coin.id)}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default SavedCoin;
