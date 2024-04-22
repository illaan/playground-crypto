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
import { ThemeProvider } from "./context/ThemeContext";
import { loader as homeLoader } from "./pages/Home";
import { loader as coinInfoLoader } from "./pages/CoinInfo";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} loader={homeLoader} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/account" element={<SignUp />} />
				<Route path="/:id" element={<CoinInfo />} loader={coinInfoLoader} />
			</Route>
		</>
	)
);

function App() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
