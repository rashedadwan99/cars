import React from "react";
import { Col } from "react-bootstrap";
import "./ourservices.css";
function OurServiceCard({ title, description, icon }) {
  return (
    <Col md={4} sm={12} xs={12} className="card-container">
      <div className="our-service-card">
        <div className="icon-section">{icon}</div>
        <div className="offer-section">
          <span>{title}</span>
        </div>
        <div className="description-section">
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
}

export default OurServiceCard;
