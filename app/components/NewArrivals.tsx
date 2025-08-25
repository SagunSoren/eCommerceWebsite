import Card from "./Card";

const NewArrivals = () => {
  return (
    <div className="mt-20">
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-4xl flex justify-center items-center tracking-wide font-black mb-10 w-full">
          NEW ARRIVALS
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            productImage="./shirt.png"
            name="T-shirt with Tape Details"
            price="120"
            rating={4.5}
          />
          <Card
            productImage="./jeans.png"
            name="Skinny Fit Jeans"
            price="240"
            rating={3.5}
          />
          <Card
            productImage="./full-shirt.png"
            name="Checkered Shirt"
            price="180"
            rating={4.5}
          />
          <Card
            productImage="./strippedshirt.png"
            name="Sleeve Striped Shirt"
            price="130"
            rating={4.5}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-10 border-gray-300 rounded-full py-2 border-1 hover:cursor-pointer">
            View All
          </button>
        </div>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-10 lg:mx-20 bg-gray-200 h-0.5 mt-20"></div>
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-4xl flex justify-center items-center tracking-wide font-black mx-auto mb-10 w-full">
          TOP SELLING
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            name="Vertical Striped Shirt"
            productImage="./verticalstripedshirt.png"
            price="212"
            rating={5}
          />
          <Card
            name="Courage Graphic T-shirt"
            productImage="./courage.png"
            price="145"
            rating={4}
          />
          <Card
            name="Loose Fit Bermuda Shorts"
            productImage="./shorts.png"
            price="80"
            rating={3.0}
          />
          <Card
            name="Faded Skinny Jeans"
            productImage="./blackjeans.png"
            price="210"
            rating={4.5}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-10 border-gray-300 rounded-full py-2 border-1 hover:cursor-pointer">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewArrivals;
