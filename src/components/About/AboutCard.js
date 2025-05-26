import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tianqi Liu </span>
            from <span className="purple"> Liaoning, China.</span>
            <br />
            I'm a junior student studying at Southwestern University of Finance and Economics(SWUFE) in Chengdu.
            <br />
            My major is MIS, which has aroused my interest in coding. I hope to be a data analyst or a product manager in Internet enterprises. I also look forward to working in Shanghai because there're lots of opportunities waiting for me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> music
            </li>
            <li className="about-activity">
              <ImPointRight /> traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> speech
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fake it till you make it!"{" "}
          </p>
          <footer className="blockquote-footer">keep pushing forward.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
