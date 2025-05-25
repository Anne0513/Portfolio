import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import techImg from "../../Assets/tech.jpg";

function AboutCard2() {
  return (
    <Card className="quote-card-view" style={{ padding: "20px", marginBottom: "30px" }}>
      <Row className="align-items-center">
        <Col md={6}>
          <img src={techImg} alt="Technical Skills" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              作为第一作者完成情感驱动的天然气价格预测论文，设计金融问答平台并获奖，技术能力让我学会用
              <span className="purple">创新思维</span>
              解决复杂问题。程序设计和比赛的磨砺，让我在AI和计算机科学领域游刃有余，自信面对未知挑战。
              <br /><br />
              As first author of a sentiment-driven natural gas price prediction paper and winner in financial Q&A platform design, my tech skills empower me to solve complex problems with <span className="purple">innovative thinking</span>. Coding competitions polished my confidence to tackle AI and computer science challenges fearlessly.
            </p>
          </blockquote>
        </Col>
      </Row>
    </Card>
  );
}

export default AboutCard2;
