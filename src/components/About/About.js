import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

import Aboutcard from "./AboutCard";
import AboutCard1 from "./AboutCard1";
import AboutCard2 from "./AboutCard2";
import AboutCard3 from "./AboutCard3";
import AboutCard4 from "./AboutCard4";
import AboutCard5 from "./AboutCard5";
import AboutCard6 from "./AboutCard6";

import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* 新增的六个模块，每个单独一个Card */}
        <Row style={{ marginTop: "50px", gap: "30px", justifyContent: "center" }}>
          <Col md={6}><AboutCard1 /></Col>
          <Col md={6}><AboutCard2 /></Col>
          <Col md={6}><AboutCard3 /></Col>
          <Col md={6}><AboutCard4 /></Col>
          <Col md={6}><AboutCard5 /></Col>
          <Col md={6}><AboutCard6 /></Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
