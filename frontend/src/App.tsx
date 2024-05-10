import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-navigation/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import usePostEffects from "./hooks/usePostEffects";

const App = () => {
	// usePostEffects();

	return (
		<BrowserRouter>
			<AppRoutes />
			<ToastContainer theme="dark" />
		</BrowserRouter>
	);
};

export default App;