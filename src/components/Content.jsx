import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <div className="flex flex-col p-8 gap-16 sm:gap-24 mt-12 mb-12 max-w-7xl">
        <Link to="/miuh-yang/korean-war">
          <div className="flex justify-center items-center cursor-pointer">
            <img
              className="object-contain rounded-sm w-3/4 shadow-lg shadow-gray-300 hover:transition-shadow hover:duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/gallery%20banner%201.jpg?updatedAt=1737497450188"
            />
            <div className="flex flex-col rounded justify-center -ml-20 sm:-ml-32 bg-white sm:p-6 shadow-md gap-2 max-w-64 p-2">
              <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                Korean War Memorial
              </h1>
              <p className="hidden md:block">
                little write up of the gallery and what to expect inside
              </p>
            </div>
          </div>
        </Link>

        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col rounded justify-center -mr-20 sm:-mr-32 bg-white sm:p-6 shadow-md z-0 max-w-64 p-2">
            <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
              Shroud Work
            </h1>
            <p className="hidden md:block">little write up</p>
          </div>
          <img
            className="object-contain rounded-sm w-3/4 shadow-lg shadow-gray-300 hover:transition-shadow hover:duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/gallery%20banner%201.jpg?updatedAt=1737497450188"
          />
        </div>

        <Link to="/miuh-yang/textile">
          <div className="flex justify-center items-center cursor-pointer">
            <img
              className="object-contain rounded-sm w-3/4 shadow-lg shadow-gray-300 hover:transition-shadow hover:duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/gallery%20banner%201.jpg?updatedAt=1737497450188"
            />
            <div className="flex flex-col rounded justify-center -ml-20 sm:-ml-32 bg-white sm:p-6 shadow-md gap-2 max-w-64 p-2">
              <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                Korean War Memorial
              </h1>
              <p className="hidden md:block">
                little write up of the gallery and what to expect inside
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
