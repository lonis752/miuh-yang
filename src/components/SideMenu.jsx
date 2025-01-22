export const SideMenu = () => {
  return (
    <>
      <div className="hidden sm:block flex flex-col p-8 sticky h-screen min-h-70 top-44">
        <div className=" inset-x-0 mx-auto">
        <h1 className="text-2xl font-bold">MIUH YANG</h1>
        <div className="flex flex-col gap-5 mt-10">
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        </div>
      </div>
    </>
  );
};
