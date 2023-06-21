import React from "react";
import Ferrari from "../images/ferarriWithoutBg.png";
import ClubCar from "../images/clubcar.png";
function CompanyImages() {
  return (
    <div className="company-images">
      <img src={ClubCar} className="company-logos" alt="logo" />
      <img src={ClubCar} className="company-logos" alt="logo" />
      <img src={Ferrari} className="ferrari-image" alt="ferrari" />
      <img src={ClubCar} className="company-logos" alt="logo" />
      <img src={ClubCar} className="company-logos" alt="logo" />
    </div>
  );
}

export default CompanyImages;
