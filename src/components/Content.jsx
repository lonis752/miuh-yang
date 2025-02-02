import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <div className="flex flex-col p-8 gap-16 sm:gap-24 mt-12 mb-12 max-w-7xl">
        <Link to="/korean-war">
          <div className="flex justify-center items-center cursor-pointer">
            <img
              className="png object-contain rounded-sm w-2/3"
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/banner1.png"
            />
            <div className="flex flex-col rounded justify-center -ml-20 sm:-ml-32 bg-white sm:p-6 shadow-md gap-2 max-w-64 p-2 z-0">
              <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                Korean War Memorial
              </h1>
              <p className="hidden md:block">
                A solemn tribute to the courage and sacrifice of those who
                served.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/shroud">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col rounded justify-center -mr-14 sm:-mr-32 bg-white sm:p-6 shadow-md z-0 max-w-64 p-2">
              <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                Shroud Work
              </h1>
              <p className="hidden md:block">Themes of memory, loss, and the passage of time.</p>
            </div>
            <img
              className="object-contain rounded-sm w-2/4 shadow-lg shadow-gray-300 hover:transition-shadow hover:duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/20191026-LMH-4204.jpg"
            />
          </div>
        </Link>

        <Link to="/textile">
          <div className="flex justify-center items-center cursor-pointer">
            <img
              className="png object-contain rounded-sm w-1/3 sm:w-1/2 cursor-pointer"
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/banner3.png?updatedAt=1737760060053"
            />
            <div className="flex flex-col z-10 rounded justify-center -ml-10 sm:-ml-32 bg-white sm:p-6 shadow-md gap-2 max-w-64 p-2">
              <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                Textile Art
              </h1>
              <p className="hidden md:block">
                Flowers and the poetics of everyday life.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
