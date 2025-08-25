const BrowseBy = () => {
  return (
    <div className="lg:mx-20 xl:mx-40 sm:mx-20 max-sm:mx-2 mt-20 bg-[#EFEFED]  rounded-4xl xl:px-20 2xl:px-40 px-2 lg:px-10 py-8">
      <h1 className="md:text-5xl text-2xl font-black flex justify-center items-center tracking-wider ">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid sm:grid-cols-3 max-sm:grid-cols-1 gap-4 mt-10 ">
        <div className="h-60 max-sm:h-40 rounded-3xl text-2xl overflow-hidden relative bg-white cursor-pointer">
          <img
            src="./casual.png"
            className="object-cover h-full absolute right-0"
            alt=""
          />
          <h1 className="p-10 absolute font-semibold ">Casual</h1>
        </div>
        <div className="sm:col-span-2 h-60 max-sm:h-40 rounded-3xl text-2xl overflow-hidden relative bg-white cursor-pointer">
          <img
            src="./formal.png"
            className="object-cover h-full left-35 absolute"
            alt=""
          />
          <h1 className="p-10 absolute font-semibold">Formal</h1>
        </div>
        <div className="sm:col-span-2 max-sm:h-40  h-60 bg-white rounded-3xl cursor-pointer  text-2xl overflow-hidden relative">
          <img
            src="./party.png"
            className="object-cover absolute left-40 h-full"
            alt=""
          />
          <h1 className="p-10 absolute font-semibold">Party</h1>
        </div>
        <div className="rounded-3xl max-sm:h-40 h-60 text-2xl overflow-clip  relative bg-white cursor-pointer">
          <img
            src="./gym.png"
            className="object-cover h-full absolute right-0"
            alt=""
          />
          <h1 className="p-10 absolute font-semibold">Gym</h1>
        </div>
      </div>
    </div>
  );
};
export default BrowseBy;
