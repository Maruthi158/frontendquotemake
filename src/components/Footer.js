import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; 2021-2022 QuoteMaker
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <a href="https://github.com/Maruthi158/frontendquotemake">
              Frontend
            </a>
          </Col>
          <Col className="text-center py-3">
            <a href="https://github.com/Maruthi158/QuoteMaker">Backend</a>
          </Col>
          <Col className="text-center py-3">
            <a href="https://github.com/Maruthi158/QuoteMaker/projects/3">
              Project board
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
