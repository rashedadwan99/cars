import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import FooterFirst from "./FooterFirst";
import FooterInfo from "./common/FooterInfo";
import CarList from "./CarList";
import LatestNewsFooter from "../LatestNewsFooter";
import ContactUsFooter from "./ContactUsFooter";
import Triangleborder from "./common/Triangleborder";
function Footer() {
  return (
    <>
      <Triangleborder borderDirection="top" borderColor="var(--black)" />
      <Row className="footer">
        <Col xs={12} sm={12} md={3}>
          <FooterFirst />
        </Col>
        <Col xs={12} sm={12} md={3}>
          <FooterInfo title="latest vehicle">
            <CarList />
          </FooterInfo>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <FooterInfo title="latest news">
            <LatestNewsFooter />
          </FooterInfo>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <FooterInfo title="contact us">
            <ContactUsFooter />
          </FooterInfo>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
