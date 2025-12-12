import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import resumeImage from "../../Assets/about.png";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          <img 
            src={resumeImage} 
            alt="resume" 
            className="img-fluid"
            style={{ maxWidth: "800px" }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
