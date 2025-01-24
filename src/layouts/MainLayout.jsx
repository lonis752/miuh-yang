import { Outlet } from "react-router-dom";
import { NavbarMobile } from "../components/NavbarMobile";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <NavbarMobile />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
