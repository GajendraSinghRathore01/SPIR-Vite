
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useToast } from "./ToastNotification";

const Protected: React.FC = () => {
  const navigate = useNavigate();
  const {showToast} = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage?.getItem("login"); 
    if (!isLoggedIn) {
      navigate("/");
      showToast("Token Expired", "error");  
    }
  }, [navigate]);
  return <Outlet />
}
export default Protected


// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const isLoggedIn = localStorage.getItem("login");

//   return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
// };

// export default ProtectedRoute;
