import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      console.log("No token found, redirecting to login");
      
    }
  }, [token, navigate]);

  return <Outlet />;
};

export default ProtectedRoutes;