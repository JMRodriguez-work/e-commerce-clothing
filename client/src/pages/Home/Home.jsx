import React from "react";
import "./Home.css";
import { Categories, Contact, FeaturedProducts, Slider } from "../../components";



const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export { Home };
