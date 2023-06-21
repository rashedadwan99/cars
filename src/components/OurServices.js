import React from "react";
import Section from "./common/Section";
import {  Row } from "react-bootstrap";
import OurServiceCard from "./OurServiceCard";
import { servicesCardData } from "../data/servicesCardData";
function OurServices() {
  return (
    <Section title="Our Services" subTitle="lorem opsem lorem opsem">
      <Row>
        {servicesCardData.map((c, i) => (
          <OurServiceCard
            title={c.title}
            description={c.description}
            icon={c.icon}
            key={i}
          />
        ))}
      </Row>
    </Section>
  );
}

export default OurServices;
