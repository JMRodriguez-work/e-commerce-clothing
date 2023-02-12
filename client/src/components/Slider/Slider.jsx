import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const DATA = [
  "https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /*
    To avoid slider problems, we'll clear our setTimeout by using the clearTimeout method. The ID value returned by setTimeout() is used as the parameter for the clearTimeout().

    We will store it in a variable and use clearTimeout() to start the timer from 0, to avoid the broken slider.

    To store the variable, we use useRef to create an object whose value is accessed with the object's current property.
   */
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? DATA.length - 1 : (prev) => prev - 1);
    console.log("Current", DATA.length - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === DATA.length - 1 ? 0 : (prev) => prev + 1);
  };

  //Automatic slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  return (
    <div className="slider">
      <div
        className="container-slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {DATA.map((image) => (
          <img key={image} src={image} alt="fashion clothing" />
        ))}
      </div>
      <div className="icons-slider">
        <div className="icon-slider" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon-slider" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export { Slider };
