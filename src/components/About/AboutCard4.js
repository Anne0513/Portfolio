import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard4() {
  return (
    <Card className="quote-card-view" style={{ minHeight: "320px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>🏢 <strong>实践丰富 · Industry-Experienced</strong></h3>
          <p style={{ textAlign: "justify" }}>
            在中国联通IT运维和安永数据分析实习期间，我深刻理解了理论与实践的结合，培养了<strong>严谨的工作态度</strong>和对细节的敏锐洞察，准备好迎接真实行业挑战。
            <br /><br />
            Interning at China Unicom’s IT Operations and EY in data analytics, I gained firsthand experience combining theory with practice,
            developing a <strong>rigorous work ethic</strong> and keen attention to detail, ready for real-world challenges.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard4;
