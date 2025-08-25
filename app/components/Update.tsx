import { FaEnvelope } from "react-icons/fa";
const Update = () => {
  return (
    <div className="sm:mx-10 md:mx-20 xl:mx-80 mx-2 bg-black text-white rounded-3xl h-40 sm:px-16 max-sm:px-2 flex items-center justify-between relative top-20">
      <div>
        <h1 className="max-sm:text-xl sm:text-2xl md:text-4xl lg:texts-5xl text-2xl  font-black">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-80">
        <div className="bg-white py-2 rounded-2xl p-4 flex items-center gap-4 ">
          <FaEnvelope className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full outline-none text-black"
          />
        </div>
        <button className="bg-white py-2 rounded-2xl text-black">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};
export default Update;
