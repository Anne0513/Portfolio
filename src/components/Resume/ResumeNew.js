import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import resumeImage from "../../Assets/about.png";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume" style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <img 
              src={resumeImage} 
              alt="resume" 
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
