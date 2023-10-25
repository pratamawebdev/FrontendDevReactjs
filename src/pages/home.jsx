import Navbar from "../components/Fragments/Global/Navbar";
import FilterLayouts from "../components/Layouts/Home/FilterLayouts";
import RestaurantLayouts from "../components/Layouts/Home/RestaurantLayouts";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <FilterLayouts />
      <RestaurantLayouts />
    </>
  );
};

export default HomePage;
