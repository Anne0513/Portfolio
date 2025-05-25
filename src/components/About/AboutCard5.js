import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard5() {
  return (
    <Card className="quote-card-view" style={{ minHeight: "320px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>🚀 <strong>创新实践 · Innovative and Practical</strong></h3>
          <p style={{ textAlign: "justify" }}>
            成都大运会志愿者，社会实践获奖，大学生艺术节微电影一等奖……多样的经历让我懂得如何将<strong>创意变为行动</strong>。我爱音乐，乐于用机器学习探索自动钢琴伴奏，热衷于用技术打破艺术边界。
            <br /><br />
            Volunteering at the Chengdu Universiade, winning social practice and film festival awards, my diverse experiences taught me to turn <strong>creativity into action</strong>. 
            Passionate about music, I explore ML-generated piano accompaniments, breaking artistic boundaries with tech.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard5;
