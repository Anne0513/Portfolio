import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard1() {
  return (
    <Card className="quote-card-view" style={{ minHeight: "320px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>🎓 <strong>成绩优异 · Academically Excellent</strong></h3>
          <p style={{ textAlign: "justify" }}>
            来自西南财经大学SWUFE，双一流财经211，主修信息管理与信息系统专业。
            在学习中，我不仅掌握了扎实的理论基础，还培养了对知识的
            <strong>热情与好奇</strong>。
            每一次高分的背后，是对商业分析与机器学习的不断探索与思考，
            促使我具备了敏锐的<strong>逻辑思维</strong>和强烈的自我驱动力。
            <br /><br />
            From SWUFE, a Double First-Class university and top-tier finance school,
            majoring in Information Management & Information Systems.
            My high academic achievements are driven by a passionate curiosity and
            deep exploration of business analytics and machine learning, sharpening my
            <strong>logical thinking</strong> and self-motivation.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard1;
