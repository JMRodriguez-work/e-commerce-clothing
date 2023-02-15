import React from "react";
import "./Home.css";
import { Categories, FeaturedProducts, Slider } from "../../components";



const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export { Home };
