import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import academicImg from "../../Assets/academic.png";
import techImg from "../../Assets/tech.png";
import crossImg from "../../Assets/cross.png";
import internImg from "../../Assets/intern.png";
import innovationImg from "../../Assets/innovation.png";
import englishImg from "../../Assets/english.png";

const descStyle = {
  fontSize: "1.1em",
  lineHeight: "1.6",
  fontWeight: "500",
  margin: "0 20px",
};

const emojiStyle = { fontWeight: "900", fontSize: "1.3em" };
const imgStyle = { maxWidth: "80%", margin: "0 auto", display: "block" };
const rowSpacing = { marginTop: "40px", marginBottom: "40px" };

function About() {
  return (
    <Container fluid className="about-section" style={{ paddingBottom: "60px" }}>
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
              认识一下 <strong className="purple">我</strong>！<br />
              Know Who <strong className="purple">I'M</strong>!
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </Col>
        </Row>

        {/* 新增左右交错内容区域 */}
        <Row className="about-desc-row" style={rowSpacing}>
          <Col md={6} className="d-flex align-items-center" style={{ paddingRight: "40px" }}>
            <p style={descStyle}>
              <span style={emojiStyle}>🎓✨</span>{" "}
              <strong>成绩优异，教育背景突出</strong><br />
              Academically Excellent —<br />
              来自西南财经大学SWUFE（双一流、财经类211）特拉华数据科学学院，
              信息管理与信息系统专业。专业排名前三，学业成绩优异。<br />
              Inspired by rigorous training and a thirst for knowledge, I cultivate discipline and a sharp analytical mind that empower me to excel and think critically.
            </p>
          </Col>
          <Col md={6}>
            <img src={academicImg} alt="Academic" className="img-fluid" style={imgStyle} />
          </Col>
        </Row>

        <Row className="about-desc-row" style={rowSpacing}>
          <Col md={6}>
            <img src={techImg} alt="Tech Skills" className="img-fluid" style={imgStyle} />
          </Col>
          <Col md={6} className="d-flex align-items-center" style={{ paddingLeft: "40px" }}>
            <p style={descStyle}>
              <span style={emojiStyle}>💻🤖</span>{" "}
              <strong>计算机与人工智能能力扎实</strong><br />
              Technically Proficient —<br />
              第一作者的情感驱动天然气价格波动预测论文，省级三等奖金融问答平台，擅长程序设计，荣获全国铜奖。<br />
              My hands-on research and competitive achievements fuel a strong problem-solving spirit and innovative thinking in tech.
            </p>
          </Col>
        </Row>

        <Row className="about-desc-row" style={rowSpacing}>
          <Col md={6} className="d-flex align-items-center" style={{ paddingRight: "40px" }}>
            <p style={descStyle}>
              <span style={emojiStyle}>🎨🤝</span>{" "}
              <strong>跨人工智能与艺术设计领域融合</strong><br />
              Interdisciplinary —<br />
              融合AI与艺术，参与自闭症儿童AI疗愈项目，旅游交友APP原型及职业规划智能体设计。<br />
              This blend nurtures my creativity and empathy, enabling me to design meaningful, user-centric intelligent solutions.
            </p>
          </Col>
          <Col md={6}>
            <img src={crossImg} alt="Interdisciplinary" className="img-fluid" style={imgStyle} />
          </Col>
        </Row>

        <Row className="about-desc-row" style={rowSpacing}>
          <Col md={6}>
            <img src={internImg} alt="Internship" className="img-fluid" style={imgStyle} />
          </Col>
          <Col md={6} className="d-flex align-items-center" style={{ paddingLeft: "40px" }}>
            <p style={descStyle}>
              <span style={emojiStyle}>🏢📊</span>{" "}
              <strong>实习与项目经验丰富</strong><br />
              Industry-Experienced —<br />
              在中国联通IT运维与安永华明数据分析部门积累实践经验。<br />
              Real-world industry exposure sharpens my adaptability and teamwork, preparing me to tackle challenges efficiently.
            </p>
          </Col>
        </Row>

        <Row className="about-desc-row" style={rowSpacing}>
          <Col md={6} className="d-flex align-items-center" style={{ paddingRight: "40px" }}>
            <p style={descStyle}>
              <span style={emojiStyle}>🚀🎬🎶</span>{" "}
              <strong>实践与艺术创新能力强</strong><br />
              Innovative and Practical —<br />
              成都大运会志愿者，艺术节微电影省级一等奖获得者，热爱音乐制作与机器学习创作。<br />
              This passion for innovation pushes me to transform imagination into impactful creations, blending art with technology.
            </p>
          </Col>
          <Col md={6}>
            <img src={innovationImg} alt="Innovation" className="img-fluid" style={imgStyle} />
          </Col>
        </Row>

        <Row className="about-desc-row" style={rowSpacing}>
          <Col md={6}>
            <img src={englishImg} alt="English" className="img-fluid" style={imgStyle} />
          </Col>
          <Col md={6} className="d-flex align-items-center" style={{ paddingLeft: "40px" }}>
            <p style={descStyle}>
              <span style={emojiStyle}>🌍🗣️</span>{" "}
              <strong>英语能力强，具备国际沟通力</strong><br />
              Globally Communicative —<br />
              担任校史馆英文讲解大队长，获多项英语演讲与阅读奖项。<br />
              Fluent communication empowers me to confidently connect and collaborate across cultures and borders.
            </p>
          </Col>
        </Row>

        {/* 技术栈与工具展示 */}
        <h1 className="project-heading" style={{ marginTop: "60px" }}>
          专业 <strong className="purple">技能</strong><br />
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          我常用的 <strong className="purple">工具</strong><br />
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
