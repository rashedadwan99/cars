import React from "react";
import { Row } from "react-bootstrap";
import "./ferrarisection.css";
import Traiangleborder from "./common/Triangleborder";
import CompanyImages from "./CompanyImages";
import CompanyDescription from "./CompanyDescription";
function FerrariSection() {
  return (
    <>
      <Traiangleborder
        borderDirection="top"
        borderColor="var(--background-color)"
      />

      <Row>
        <div className="company-section">
          <CompanyDescription />
        </div>
        <CompanyImages />
      </Row>
    </>
  );
}

export default FerrariSection;
