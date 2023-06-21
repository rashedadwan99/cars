import React from "react";
import { Col, Row } from "react-bootstrap";
import { contactUsData } from "../data/ContactUsData";
function ContactUsFooter() {
  return contactUsData.map((c, i) => (
    <Row key={i}>
      <Col sm={1}>{c.icon}</Col>
      <Col sm={10}>
        <span>{c.data}</span>
      </Col>
    </Row>
  ));
}

export default ContactUsFooter;
