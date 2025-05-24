import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

// 图片路径
import academicImg from "../../Assets/about/academic.png";
import techImg from "../../Assets/about/tech.png";
import crossImg from "../../Assets/about/cross.png";
import internImg from "../../Assets/about/intern.png";
import innovationImg from "../../Assets/about/innovation.png";
import englishImg from "../../Assets/about/english.jpg";

function About() {
  const circleImgStyle = {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const normalImgStyle = {
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

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

        {/* 左右交错内容区域 */}
        <Row
          className="my-5 d-flex align-items-center"
          style={{ flexDirection: "row" }}
        >
          <Col md={6}>
            <p>
              <strong>Academically Excellent:</strong> I consistently rank at
              the top of my class with multiple academic honors.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={academicImg} alt="Academic" style={normalImgStyle} />
          </Col>
        </Row>

        <Row
          className="my-5 d-flex align-items-center"
          style={{ flexDirection: "row-reverse" }}
        >
          <Col md={6}>
            <p>
              <strong>Technically Proficient:</strong> I have solid skills in
              computer science and AI, supported by competitions and research.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={techImg} alt="Tech Skills" style={circleImgStyle} />
          </Col>
        </Row>

        <Row
          className="my-5 d-flex align-items-center"
          style={{ flexDirection: "row" }}
        >
          <Col md={6}>
            <p>
              <strong>Interdisciplinary:</strong> I integrate AI with art and
              design through creative cross-domain projects.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={crossImg} alt="Interdisciplinary" style={normalImgStyle} />
          </Col>
        </Row>

        <Row
          className="my-5 d-flex align-items-center"
          style={{ flexDirection: "row-reverse" }}
        >
          <Col md={6}>
            <p>
              <strong>Industry-Experienced:</strong> I’ve completed internships
              at top companies, gaining hands-on industry knowledge.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={internImg} alt="Internship" style={circleImgStyle} />
          </Col>
        </Row>

        <Row
          className="my-5 d-flex align-items-center"
          style={{ flexDirection: "row" }}
        >
          <Col md={6}>
            <p>
              <strong>Innovative and Practical:</strong> I love turning ideas
              into real-world applications that combine tech and art.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={innovationImg} alt="Innovation" style={circleImgStyle} />
          </Col>
        </Row>

        <Row
          className="my-5 d-flex align-items-center"
          style={{ flexDirection: "row-reverse" }}
        >
          <Col md={6}>
            <p>
              <strong>Globally Communicative:</strong> I am fluent in English,
              enabling me to collaborate and present confidently worldwide.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={englishImg} alt="English" style={circleImgStyle} />
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
