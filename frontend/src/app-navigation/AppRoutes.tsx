import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedRoutes from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
     
      <Route path={ROUTES.register} element={<Register />} />
      <Route path={ROUTES.login} element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.insights} element={<Insights />} />
        <Route path={ROUTES.blog} element={<Blog />} />
       
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.reset_password} element={<ResetPassword />} />
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
