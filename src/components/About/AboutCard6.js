import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard6() {
  return (
    <Card className="quote-card-view" style={{ minHeight: "320px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>🌍 <strong>全球沟通 · Globally Communicative</strong></h3>
          <p style={{ textAlign: "justify" }}>
            西南财经大学校史馆英文讲解员，英语演讲比赛获奖，我用流利英语和自信表达搭建了通向世界的桥梁，善于跨文化交流，成为真正的<strong>国际人才</strong>。
            <br /><br />
            Serving as English guide at SWUFE history museum and winning English speech contests, I build bridges to the world with fluent language and confident expression, thriving as a truly <strong>global talent</strong>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard6;
