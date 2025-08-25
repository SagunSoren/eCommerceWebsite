import Update from "./Update";

const Footer = () => {
  return (
    <div className="">
      <Update />
      <div className="w-full bg-gray-200 max-sm:h-180 sm:h-140 lg:h-120 px-6 md:px-16 pt-30">
        <div className="flex max-sm:flex-col flex-row max-sm:gap-10">
          <div className="w-80 max-sm:w-full max-sm:mr-16 sm:mr-2 md:mr-10">
            <h1 className="text-5xl font-black tracking-wide mb-6">SHOP.CO</h1>
            <p>
              We have clothes that suits your style and which youre proud to
              wear. From women to men
            </p>
          </div>

          <div className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-6 w-full ">
            <div className="">
              <h1 className="sm:mb-6 mb-2 text-xl font-medium cursor-pointer">
                COMPANY
              </h1>
              <ul className=" flex flex-col sm:gap-4 cursor-pointer">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h1 className="sm:mb-6 mb-2  text-xl font-medium cursor-pointer">
                HELP
              </h1>
              <ul className=" flex flex-col sm:gap-4 cursor-pointer">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditionse</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h1 className="sm:mb-6 mb-2  text-xl font-medium cursor-pointer">
                FAQ
              </h1>
              <ul className=" flex flex-col sm:gap-4 cursor-pointer">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div>
              <h1 className="sm:mb-6 mb-2  text-xl font-medium cursor-pointer">
                RESOURCES
              </h1>
              <ul className=" flex flex-col sm:gap-4 cursor-pointer">
                <li>Free eBooks</li>
                <li>Developement Tutorial</li>
                <li>How to -Blog</li>
                <li>Yotube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-300 rounded-4xl mt-10 mb-4"></div>
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <p>Shop.co © 2000-2003, All Rights Reserved </p>
          <div className="flex gap-4">
            <div className="w-20 h-12 rounded-xl bg-white p-3 flex items-center justify-center">
              <img src="./visa.svg" className="w-20" alt="" />
            </div>
            <div className="w-20 h-12 rounded-xl bg-white p-3 flex items-center justify-center">
              <img src="./master.png" className="object-contain" alt="" />
            </div>
            <div className="w-20 h-12 rounded-xl bg-white p-3 flex items-center justify-center">
              <img src="./paypal.svg" className="object-cover w-20" alt="" />
            </div>
            <div className="w-20 h-12 rounded-xl bg-white p-3 flex items-center justify-center">
              <img src="./ApplePay.svg" className="object-cover w-12" alt="" />
            </div>
            <div className="w-20 h-12 rounded-xl bg-white p-3 flex items-center justify-center">
              <img src="./GPay.svg" className="object-cover w-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
