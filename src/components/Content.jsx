export const Content = () => {
  return (
    <>
      <div className="flex flex-col p-8 gap-32 mt-12">
        <div className="flex flex-wrap justify-center items-center">
          <img
            className="object-contain w-3/4 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/gallery%20banner%201.jpg?updatedAt=1737497450188"
          />
          <div className="flex flex-col justify-center -ml-32 bg-white p-6 shadow-md">
            <h1 className="text-3xl font-bold">Korean War Memorial</h1>
            <p>little write up</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-col justify-center -mr-32 bg-white p-6 shadow-md z-0">
            <h1 className="text-3xl font-bold">Korean War Memorial</h1>
            <p>little write up</p>
          </div>
          <img
            className="object-contain w-3/4 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/gallery%20banner%201.jpg?updatedAt=1737497450188"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <img
            className="object-contain w-3/4 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/gallery%20banner%201.jpg?updatedAt=1737497450188"
          />
          <div className="flex flex-col justify-center -ml-32 bg-white p-6 shadow-md">
            <h1 className="text-3xl font-bold">Korean War Memorial</h1>
            <p>little write up</p>
          </div>
        </div>
      </div>
    </>
  );
};
