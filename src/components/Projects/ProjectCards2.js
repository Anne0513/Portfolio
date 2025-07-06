import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards2(props) {
  return (
    <Card className="project-card-view">
      {/* 图片部分 */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="Project image" />
      )}

      {/* 如果提供了音频路径，则显示音频播放器 */}
      {props.audioPath && (
        <audio controls style={{ width: "100%", marginTop: "15px" }}>
          <source src={props.audioPath} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      <Card.Body>
        {/* 标题 */}
        <Card.Title>{props.title}</Card.Title>

        {/* 描述文字 */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* GitHub/Blog 链接 */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Demo 链接 */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards2;
