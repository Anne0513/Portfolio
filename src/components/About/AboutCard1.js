import React from "react";
import Card from "react-bootstrap/Card";
import academicImg from "../../Assets/academic.png";

function AboutCard1() {
  return (
    <Card className="quote-card-view" style={{ padding: "20px", marginBottom: "30px" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
        {/* 左边文字内容 */}
        <div style={{ flex: 1 }}>
          <h3>🎓 <span className="purple">成绩优异 · Academically Excellent</span></h3>
          <p style={{ textAlign: "justify" }}>
            来自西南财经大学 SWUFE，双一流财经 211，主修信息管理与信息系统专业。在学习中，我不仅掌握了扎实的理论基础，还培养了对知识的
            <span className="purple"> 热情与好奇</span>。
            每一次高分的背后，是对商业分析与机器学习的不断探索与思考，促使我具备了敏锐的
            <span className="purple"> 逻辑思维</span> 和强烈的
            <span className="purple"> 自我驱动力</span>。
            <br />
            From SWUFE, a Double First-Class university and top-tier finance school, majoring in Information Management & Information Systems.
            My high academic achievements are driven by a passionate curiosity and deep exploration of business analytics and machine learning,
            sharpening my <span className="purple"> logical thinking</span> and <span className="purple"> self-motivation</span>.
          </p>
        </div>

        {/* 右边图片 */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={academicImg}
            alt="Academic Excellence"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
    </Card>
  );
}

export default AboutCard1;
