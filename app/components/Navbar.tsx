import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-center bg-black h-8">
        <p className="text-white">
          Sign up and get 20% off to your first order.{" "}
          <span className="underline underline-offset-2">Sign Up Now</span>
        </p>
      </div>

      <div className=" bg-white">
        <div className="flex items-center justify-between gap-8 h-20  px-6 lg:px-20">
          <div className="flex items-center gap-4 ">
            <GiHamburgerMenu className="text-3xl lg:hidden" />
            <h1 className="font-black text-3xl">SHOP.CO</h1>
          </div>

          <ul className="flex gap-5 max-lg:hidden">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brand</li>
          </ul>
          <div className="flex flex-1 gap-4 items-center rounded-full bg-[#f0f0f0] px-5 py-2 max-md:hidden">
            <FaSearch />
            <input
              type="text"
              placeholder="Search for products.."
              className="max-full outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <FaSearch className="text-xl md:hidden" />
            <FaShoppingCart className="text-xl" />
            <CgProfile className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
