import React from "react";
import { Col, Row } from "react-bootstrap";
import "./advantagessection.css";
import AdvantegesRightSection from "./AdvantegesRightSection";
import CarAnimation from "./CarAnimation";

function Advantages() {
  return (
    <Row className="advantages-section">
      <Col xs={12} md={6} lg={5} className="car-city-animation">
        <CarAnimation />
      </Col>
      <Col xs={12} md={6} lg={5}>
        <AdvantegesRightSection />
      </Col>
    </Row>
  );
}

export default Advantages;
