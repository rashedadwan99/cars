import React from "react";
import { Col, Row } from "react-bootstrap";
import WelcomeSection from "./WelcomeSection";
import CarSection from "./CarSection";
import Traiangleborder from "./common/Triangleborder";
import "./firstsection.css";
import SocialIcons from "./SocialIcons";
function FirstSection() {
  return (
    <>
      <Row className="first-section">
        <SocialIcons />
        <Col sm={12} md={6} className="left-section">
          <WelcomeSection />
        </Col>
        <Col xs={0} sm={12} md={6} className="right-section">
          <CarSection />
        </Col>
      </Row>
      <Traiangleborder
        borderDirection="bottom"
        borderColor="var(--background-color)"
      />
    </>
  );
}

export default FirstSection;
