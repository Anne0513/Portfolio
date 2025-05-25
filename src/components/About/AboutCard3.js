import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard3() {
  return (
    <Card className="quote-card-view" style={{ minHeight: "320px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>🎨 <strong>跨界融合 · Interdisciplinary</strong></h3>
          <p style={{ textAlign: "justify" }}>
            我喜欢将AI与艺术设计结合，从自闭症儿童AI疗愈项目到旅游交友app，再到职业规划智能体，
            跨界经历教会我用<strong>多元视角</strong>创造有温度、有趣味的智能体验。
            <br /><br />
            I enjoy blending AI with art and design. From AI therapy for autistic children to travel social apps and career planning agents,
            these cross-disciplinary projects taught me to create intelligent experiences with <strong>diverse perspectives</strong> and warmth.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard3;
