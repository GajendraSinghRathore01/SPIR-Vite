import { Outlet } from "react-router-dom";
import HeaderNavbar from "../../common/HeaderNavbar";
import Footer from "../../common/Footer";

const MainLayout = () => {
  return (
    <>
      <HeaderNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
