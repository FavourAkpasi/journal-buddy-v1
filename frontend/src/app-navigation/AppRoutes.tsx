import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedRoutes from "./ProtectedRoute";
import Entries from "../pages/Entries/Entries";
import Conversations from "../pages/Conversations/Conversations";
import Chat from "../pages/Chat/Chat";



const AppRoutes = () => {
  return (
    <Routes>

      <Route path={ROUTES.register} element={<Register />} />
      <Route path={ROUTES.login} element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.entries} element={<Entries />} />
        <Route path={ROUTES.conversations} element={<Conversations />} />
        <Route path={`${ROUTES.chat}/:entryId`} element={<Chat />} />
      </Route>

      {/* <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.admin} element={<AdminDashboard />} />
        <Route path={ROUTES.support} element={<Support />} />
        <Route
          path={`${ROUTES.post_details}/:postId`}
          element={<PostDetails />}
        /> */}
    </Routes>
  );
};

export default AppRoutes;
