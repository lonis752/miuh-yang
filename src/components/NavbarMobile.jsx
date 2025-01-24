import { Link } from "react-router-dom";

export const NavbarMobile = () => {
  return (
    <>
      <div className="z-20 sm:hidden flex justify-between sticky top-0 p-5 bg-white">
        <Link to="/miuh-yang/">
          <h1 className="text-2xl font-bold">MIUH YANG</h1>
        </Link>
        <div className="flex gap-5">
          <Link to="/miuh-yang/about">
            <p>About</p>
          </Link>
          <Link to="/miuh-yang/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
};
