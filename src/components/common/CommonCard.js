import Card from "react-bootstrap/Card";
import CarLight from "../../images/carLight.jpg";
import CardBody from "../CardBody";
import "./card.css";
function CommonCard({ imageHeight }) {
  return (
    <Card style={{ borderRadius: 0, border: "none" }}>
      <Card.Img
        variant="top"
        src={CarLight}
        style={{ height: imageHeight ? imageHeight : "300px" }}
      />
      <CardBody />
    </Card>
  );
}
export default CommonCard;
