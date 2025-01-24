import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <>
      <div className="hidden sm:block flex flex-col mt-20 p-8 pl-16 sticky h-screen min-h-70 top-44 pt-20">
        <div className=" inset-x-0 mx-auto">
          <Link to="/miuh-yang/">
            <h1 className="text-2xl font-bold">MIUH</h1>
            <h1 className="text-2xl font-bold">YANG</h1>
          </Link>
          <div className="flex flex-col gap-5 mt-10">
            <Link to="/miuh-yang/gallery">
              <p>Gallery</p>
            </Link>
            <Link to="/miuh-yang/about">
              <p>About</p>
            </Link>
            <Link to="/miuh-yang/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
