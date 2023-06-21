import React from "react";
import { Card } from "react-bootstrap";

function CardBody() {
  return (
    <Card.Body>
      <div className="card-title">
        <div className="left-border" />
        <div style={{ marginLeft: "15px" }}>
          <span>
            21/6/2023, posted by <span className="poster-name">Rashed</span>
          </span>
          <p>main title</p>
        </div>
      </div>
      <Card.Text>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem
      </Card.Text>
    </Card.Body>
  );
}

export default CardBody;
