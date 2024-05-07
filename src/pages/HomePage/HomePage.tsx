import Hero from "../../organisms/Hero/Hero";
import PopularCategories from "../../organisms/PopularCategories/PopularCategories";
import PopularSlider from "../../organisms/PopularSlider/PopularSlider";
import VegetarianSlider from "../../organisms/VegetarianSlider/VegetarianSlider";
import "./home-page.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <h1 id="categories">Recommended Categories</h1>
      <PopularCategories />
      <h1>Popular Recipes</h1>
      <PopularSlider />
      <h1>Vegetarian</h1>
      <VegetarianSlider />
    </div>
  );
};

export default HomePage;
