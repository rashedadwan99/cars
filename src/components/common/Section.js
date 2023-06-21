import React from "react";
import "./section.css";
import { Container, Row } from "react-bootstrap";
function Section({ title, subTitle, children }) {
  return (
    <Container>
      <Row>
        <div className="titles-section">
          <span className="main-title">{title}</span>
          <span className="sub-title">{subTitle}</span>
        </div>
      </Row>
      {children}
    </Container>
  );
}

export default Section;
