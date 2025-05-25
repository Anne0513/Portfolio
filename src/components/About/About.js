import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import academicImg from "../../Assets/academic.png";
import techImg from "../../Assets/tech.jpg";
import crossImg from "../../Assets/cross.png";
import internImg from "../../Assets/intern.jpg";
import innovationImg from "../../Assets/innovation.jpg";
import englishImg from "../../Assets/english.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* 原始 About Card 区域 */}
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

        {/* 新增左右交错内容区域 */}
        <Row className="about-desc-row">
          <Col md={6} className="d-flex align-items-center">
            <p><strong>Academically Excellent:</strong> I consistently rank at the top of my class with multiple academic honors.</p>
          </Col>
          <Col md={6}>
            <img src={academicImg} alt="Academic" className="img-fluid" />
          </Col>
        </Row>

        <Row className="about-desc-row">
          <Col md={6}>
            <img src={techImg} alt="Tech Skills" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p><strong>Technically Proficient:</strong> I have solid skills in computer science and AI, supported by competitions and research.</p>
          </Col>
        </Row>

        <Row className="about-desc-row">
          <Col md={6} className="d-flex align-items-center">
            <p><strong>Interdisciplinary:</strong> I integrate AI with art and design through creative cross-domain projects.</p>
          </Col>
          <Col md={6}>
            <img src={crossImg} alt="Interdisciplinary" className="img-fluid" />
          </Col>
        </Row>

        <Row className="about-desc-row">
          <Col md={6}>
            <img src={internImg} alt="Internship" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p><strong>Industry-Experienced:</strong> I’ve completed internships at top companies, gaining hands-on industry knowledge.</p>
          </Col>
        </Row>

        <Row className="about-desc-row">
          <Col md={6} className="d-flex align-items-center">
            <p><strong>Innovative and Practical:</strong> I love turning ideas into real-world applications that combine tech and art.</p>
          </Col>
          <Col md={6}>
            <img src={innovationImg} alt="Innovation" className="img-fluid" />
          </Col>
        </Row>

        <Row className="about-desc-row">
          <Col md={6}>
            <img src={englishImg} alt="English" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p><strong>Globally Communicative:</strong> I am fluent in English, enabling me to collaborate and present confidently worldwide.</p>
          </Col>
        </Row>

        {/* 技术栈与工具展示 */}
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
