
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login"); 
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return <Outlet />;
};

export default Protected;
 
