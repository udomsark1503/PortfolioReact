import React from "react";
import { Row, Image, Col } from "antd";
const MyDetail = () => {
  return (
    <Row className="MyDetail">
      <Col xs={16} sm={10} md={10} lg={6} xl={4} xxl={4} className="DisplayCenter">
          <Image height={'100%'} src="/MyPic/MyPicture.jpg" />
      </Col>
      <Col xs={24} sm={24} md={14} lg={18} xl={20} xxl={20} className="DetailBlog">
          <h1 style={{fontSize:'2.2rem'}}>Udomsark Amnuaysookwong</h1>
          <h2>Web Full-Stack Developer</h2>
          <p>
            My name is Max. I have an interest in programming, so I started
            researching it on my own through Udemy & FutureSkill and with
            experienced programmers. To prepare for work I sincerely hope that
            my programming skills can help your team develop projects. And now I 
            have real experience with writing websites and have 2 projects in development 
            right now.
          </p>
      </Col>
    </Row>
  );
};
export default MyDetail;
