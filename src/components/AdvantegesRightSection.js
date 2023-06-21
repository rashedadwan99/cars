import React from "react";
import AwesomeList from "./AwesomeList";

function AdvantegesRightSection() {
  return (
    <div className="advantages-right-section">
      <p className="advantages-first-title">our advantages you need to know</p>
      <p className="advantages-second-title">
        <span style={{ color: "var(--blue)" }}>125K+</span> happy clients
      </p>
      <p className="advantages-info">
        Lorem lorem lorem lorem lorem lorem lorem lorem
      </p>
      <div className="advantages-list">
        <AwesomeList />
      </div>
    </div>
  );
}

export default AdvantegesRightSection;
