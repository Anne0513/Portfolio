import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard2() {
  return (
    <Card className="quote-card-view" style={{ minHeight: "320px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>💻 <strong>技术过硬 · Technically Proficient</strong></h3>
          <p style={{ textAlign: "justify" }}>
            作为第一作者完成情感驱动的天然气价格预测论文，设计金融问答平台并获奖，
            技术能力让我学会用<strong>创新思维</strong>解决复杂问题。
            程序设计和比赛的磨砺，让我在AI和计算机科学领域游刃有余，自信面对未知挑战。
            <br /><br />
            As first author of a sentiment-driven natural gas price prediction paper and winner in financial Q&A platform design,
            my tech skills empower me to solve complex problems with <strong>innovative thinking</strong>.
            Coding competitions polished my confidence to tackle AI and computer science challenges fearlessly.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard2;
