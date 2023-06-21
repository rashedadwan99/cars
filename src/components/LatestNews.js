import React from "react";
import Section from "./common/Section";
import { Col, Row } from "react-bootstrap";
import CommonCard from "./common/CommonCard";
function LatestNews() {
  return (
    <Section title="latest news" subTitle="lorem opsem lorem opresm loresm">
      <Row style={{ marginBottom: "100px" }} className="latest-news">
        <Col md={8}>
          <Row style={{ height: "480px" }}>
            <Col>
              <CommonCard />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <CommonCard imageHeight="200px" />
            </Col>
            <Col xs={12} sm={12} md={6}>
              <CommonCard imageHeight="200px" />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <CommonCard imageHeight="250px" />
            </Col>
          </Row>
          <Row>
            <Col>
              <CommonCard imageHeight="250px" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default LatestNews;
