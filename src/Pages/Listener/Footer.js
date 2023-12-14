import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../Assest/Logo (1).png";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <img src={img} alt="img"></img>
            </Col>
            <Col>
              <div>consumer policy</div>
              <p>terms and conditons</p>
              <p>complaints</p>
              <p>privacy policy</p>
            </Col>
            <Col>
              <div>help</div>
              <p>security</p>
              <p>f&q</p>
              <p>privacy</p>
            </Col>
            <Col>
              <div>about</div>
              <p>about US</p>
              <p>achievements</p>
            </Col>
            <Col><div>social</div>
            <p><RiInstagramFill /></p></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
