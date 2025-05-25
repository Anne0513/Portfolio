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

        <Row className="about-desc-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="d-flex align-items-center">
            <p>
              <span role="img" aria-label="graduation cap">🎓</span> <strong>成绩优异 · Academically Excellent</strong><br />
              来自西南财经大学SWUFE，双一流财经211，主修信息管理与信息系统专业。在学习中，我不仅掌握了扎实的理论基础，还培养了对知识的<strong>热情与好奇</strong>。每一次高分的背后，是对商业分析与机器学习的不断探索与思考，促使我具备了敏锐的<strong>逻辑思维</strong>和强烈的自我驱动力。<br />
              From SWUFE, a Double First-Class university and top-tier finance school, majoring in Information Management & Information Systems. My high academic achievements are driven by a passionate curiosity and deep exploration of business analytics and machine learning, sharpening my <strong>logical thinking</strong> and self-motivation.
            </p>
          </Col>
          <Col md={6}>
            <img src={academicImg} alt="Academic" className="img-fluid" />
          </Col>
        </Row>

        <Row className="about-desc-row" style={{ marginBottom: "50px" }}>
          <Col md={6}>
            <img src={techImg} alt="Tech Skills" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p>
              <span role="img" aria-label="laptop">💻</span> <strong>技术过硬 · Technically Proficient</strong><br />
              作为第一作者完成情感驱动的天然气价格预测论文，设计金融问答平台并获奖，技术能力让我学会用<strong>创新思维</strong>解决复杂问题。程序设计和比赛的磨砺，让我在AI和计算机科学领域游刃有余，自信面对未知挑战。<br />
              As first author of a sentiment-driven natural gas price prediction paper and winner in financial Q&A platform design, my tech skills empower me to solve complex problems with <strong>innovative thinking</strong>. Coding competitions polished my confidence to tackle AI and computer science challenges fearlessly.
            </p>
          </Col>
        </Row>

        <Row className="about-desc-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="d-flex align-items-center">
            <p>
              <span role="img" aria-label="art">🎨</span> <strong>跨界融合 · Interdisciplinary</strong><br />
              我喜欢将AI与艺术设计结合，从自闭症儿童AI疗愈项目到旅游交友app，再到职业规划智能体，跨界经历教会我用<strong>多元视角</strong>创造有温度、有趣味的智能体验。<br />
              I enjoy blending AI with art and design. From AI therapy for autistic children to travel social apps and career planning agents, these cross-disciplinary projects taught me to create intelligent experiences with <strong>diverse perspectives</strong> and warmth.
            </p>
          </Col>
          <Col md={6}>
            <img src={crossImg} alt="Interdisciplinary" className="img-fluid" />
          </Col>
        </Row>

        <Row className="about-desc-row" style={{ marginBottom: "50px" }}>
          <Col md={6}>
            <img src={internImg} alt="Internship" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p>
              <span role="img" aria-label="office building">🏢</span> <strong>实践丰富 · Industry-Experienced</strong><br />
              在中国联通IT运维和安永数据分析实习期间，我深刻理解了理论与实践的结合，培养了<strong>严谨的工作态度</strong>和对细节的敏锐洞察，准备好迎接真实行业挑战。<br />
              Interning at China Unicom’s IT Operations and EY in data analytics, I gained firsthand experience combining theory with practice, developing a <strong>rigorous work ethic</strong> and keen attention to detail, ready for real-world challenges.
            </p>
          </Col>
        </Row>

        <Row className="about-desc-row" style={{ marginBottom: "50px" }}>
          <Col md={6} className="d-flex align-items-center">
            <p>
              <span role="img" aria-label="rocket">🚀</span> <strong>创新实践 · Innovative and Practical</strong><br />
              成都大运会志愿者，社会实践获奖，大学生艺术节微电影一等奖……多样的经历让我懂得如何将<strong>创意变为行动</strong>。我爱音乐，乐于用机器学习探索自动钢琴伴奏，热衷于用技术打破艺术边界。<br />
              Volunteering at the Chengdu Universiade, winning social practice and film festival awards, my diverse experiences taught me to turn <strong>creativity into action</strong>. Passionate about music, I explore ML-generated piano accompaniments, breaking artistic boundaries with tech.
            </p>
          </Col>
          <Col md={6}>
            <img src={innovationImg} alt="Innovation" className="img-fluid" />
          </Col>
        </Row>

        <Row className="about-desc-row" style={{ marginBottom: "50px" }}>
          <Col md={6}>
            <img src={englishImg} alt="English" className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p>
              <span role="img" aria-label="globe">🌍</span> <strong>全球沟通 · Globally Communicative</strong><br />
              西南财经大学校史馆英文讲解员，英语演讲比赛获奖，我用流利英语和自信表达搭建了通向世界的桥梁，善于跨文化交流，成为真正的<strong>国际人才</strong>。<br />
              Serving as English guide at SWUFE history museum and winning English speech contests, I build bridges to the world with fluent language and confident expression, thriving as a truly <strong>global talent</strong>.
            </p>
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
