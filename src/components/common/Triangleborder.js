import React, { useEffect, useState } from "react";
import "./triangleborder.css";
import { Row } from "react-bootstrap";
function Traiangleborder({ borderDirection, borderColor }) {
  const [borderDir, setBorderDir] = useState();
  useEffect(() => {
    if (borderDirection === "top") {
      setBorderDir({ borderBottom: `68px solid ${borderColor}` });
      return;
    } else if (borderDirection === "bottom") {
      setBorderDir({ borderTop: `68px solid ${borderColor}` });
      return;
    }
  }, [borderDirection, borderColor]);

  return <Row className="triangle" style={borderDir}></Row>;
}

export default Traiangleborder;
