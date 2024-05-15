import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-navigation/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useEntry from "./Store/useEntry";
import { useEffect } from "react";

const App = () => {
	const { getAllEntries } = useEntry(state => state);

	useEffect(() => {
		getAllEntries();
	}, []);

	return (
		<BrowserRouter>
			<AppRoutes />
			<ToastContainer theme="dark" />
		</BrowserRouter>
	);
};

export default App;