import React from "react";
import "./carsection.css";
import { HiArrowRight } from "react-icons/hi";
function CarSection() {
  return (
    <div className="car-section">
      <img
        src="https://media.giphy.com/media/jQhz3S2XPuhSLtRnrd/giphy.gif"
        alt="gif"
      />
      <div className="right-arrow">
        <HiArrowRight />
      </div>
    </div>
  );
}

export default CarSection;
