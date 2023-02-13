import React from "react";
import "./Home.css";
import { FeaturedProducts, Slider } from "../../components";



const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export { Home };
