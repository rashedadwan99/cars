import React from "react";
import Car from "../images/car.png";
import Wheel from "../images/wheel.png";
import City from "../images/city.png";
import "./caranimation.css";
function CarAnimation() {
  return (
    <>
      <div className="car-animation">
        <img src={City} alt="city" className="city" />
        <div className="car">
          <img src={Car} alt="car" className="car-body" />
          <img src={Wheel} alt="wheel" className="wheel left-wheel" />
          <img src={Wheel} alt="wheel" className="wheel right-wheel" />
        </div>
      </div>
    </>
  );
}

export default CarAnimation;
