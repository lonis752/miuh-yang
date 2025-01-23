import { Outlet } from "react-router-dom";
import { NavbarMobile } from "../components/NavbarMobile";

const MainLayout = () => {
  return (
    <div className="">
      <NavbarMobile />
      <Outlet />
    </div>
  );
};

export default MainLayout;
