import BrowseBy from "./components/BrowseBy";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <NewArrivals />
      <BrowseBy />
      <Footer />
    </div>
  );
};
export default page;
