import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Store/useAuth";

const ProtectedRoutes = () => {
  const {user} = useAuth((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      console.log("No token found, redirecting to login");
      
    }
  }, [user, navigate]);

  return <Outlet />;
};

export default ProtectedRoutes;