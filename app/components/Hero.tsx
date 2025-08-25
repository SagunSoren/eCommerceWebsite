const Hero = () => {
  return (
    <div className="min-h-screen w-full h-full">
      <div className=" flex md:flex-row max-md:items-center bg-[#F2F0F1] flex-col lg:px-20 px-10 max-lg:pt-40 ">
        <div className="left-side flex flex-col justify-center items-start gap-4 md:w-1/2">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your indiviuality and cater to your sense of
            style
          </p>
          <button className="bg-black text-white py-3 px-10 rounded-full">
            Shop Now
          </button>
          <div className="flex gap-6 max-sm:gap-2">
            <div>
              <h1 className="text-2xl font-semibold">2000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div className="w-0.5 bg-gray-300"></div>
            <div>
              <h1 className="text-2xl font-semibold">30,000+</h1>
              <p>Happy Customers</p>
            </div>
            <div className="w-0.5 bg-gray-300"></div>
            <div>
              <h1 className="text-2xl font-semibold">200+</h1>
              <p>International Brands</p>
            </div>
          </div>
        </div>
        <div className="right-side md:w-1/2 flex justify-center items-center">
          <img src="./hero.png" alt="" className="w-[600px]" />
        </div>
      </div>
      <div className="flex relative bottom-20 w-full h-30 max-sm:h-40 max-md:h-30 justify-around items-center flex-wrap px-10 bg-black">
        <img src="versace.svg" className="h-10 invert-0 max-md:h-8 " alt="" />
        <img src="zara.svg" className="h-10 invert-0 max-md:h-8" alt="" />
        <img src="gucci.svg" className="h-10 invert-0 max-md:h-8" alt="" />
        <img src="pradas.svg" className="h-10 invert-0 max-md:h-8" alt="" />
        <img src="ck.svg" className="h-10 invert-0 max-md:h-8" alt="" />
      </div>
    </div>
  );
};
export default Hero;
