import React from "react";
import { latestVehicles } from "../data/LatestVehicle";
import { RxDoubleArrowRight } from "react-icons/rx";

function CarList() {
  return (
    <div className="latest-vehicles">
      {latestVehicles.map((v, i) => (
        <span key={i}>
          <RxDoubleArrowRight />
          <span>{v}</span>
        </span>
      ))}
    </div>
  );
}

export default CarList;
