import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CoinInfo from "./pages/CoinInfo";
import Account from "./pages/Account";
import IsLoggedIn from "./helpers/is-logged-in";
import { ThemeProvider } from "./context/ThemeContext";
import { loader as homeLoader } from "./pages/Home";
import { loader as coinInfoLoader } from "./pages/CoinInfo";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} loader={homeLoader} />
				<Route
					path="/signin"
					element={
						<IsLoggedIn>
							<SignIn />
						</IsLoggedIn>
					}
				/>
				<Route
					path="/signup"
					element={
						<IsLoggedIn>
							<SignUp />
						</IsLoggedIn>
					}
				/>
				<Route path="/account" element={<Account />} />
				<Route path="/:id" element={<CoinInfo />} loader={coinInfoLoader} />
			</Route>
		</>
	)
);

function App() {
	return (
		<ThemeProvider>
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default App;
