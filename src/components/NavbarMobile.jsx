export const NavbarMobile = () => {
  return (
    <>
      <div className="sm:hidden flex justify-between sticky top-0">
        <h1 className="text-2xl font-bold">MIUH YANG</h1>
        <div className="flex gap-5">
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
};
