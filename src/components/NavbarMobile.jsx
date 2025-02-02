import { Link } from "react-router-dom";

export const NavbarMobile = () => {
  return (
    <>
      <div className="z-20 md:hidden flex justify-between sticky top-0 p-5 bg-white">
        <Link to="/">
          <h1 className="text-2xl font-bold">MIUH YANG</h1>
        </Link>
        <div className="flex gap-5">
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
};
