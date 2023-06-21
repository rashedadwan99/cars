import React from "react";
import { Button } from "react-bootstrap";
import "./button.css";
function ButtonsGroup({ label, icon, ...rest }) {
  return (
    <Button {...rest} className="common-button">
      <div>{label}</div>
      {icon}
    </Button>
  );
}

export default ButtonsGroup;
