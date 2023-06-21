import React from "react";
import { Nav } from "react-bootstrap";

function NavLink({ nav }) {
  return <Nav.Link href={nav.link}>{nav.label}</Nav.Link>;
}

export default NavLink;
