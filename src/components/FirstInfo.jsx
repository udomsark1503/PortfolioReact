import React from "react";
import { Row, Image, Col } from "antd";
const MyDetail = () => {
  return (
    <Row className="MyDetail">
<<<<<<< HEAD
      <Col flex="1 1 200px" className="DisplayCenter">
        <div className="DisplayCenter IMGHead">
          <Image className='MyPic' height={'100%'} src="/MyPic/MyPicture.jpg" />
=======
      <Col flex="1 1 15vw" className="DisplayCenter">
        <div className="DisplayCenter">
          <Image height={'100%'} src="/MyPic/MyPicture.jpg" />
>>>>>>> 8d03c5fc7c63c492e29885ad9d1b826f28b304aa
        </div>
      </Col>
      <Col flex="1 1 80%" className="DetailBlog">
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
