import React from "react";
import { Card, Divider, Carousel, Image } from "antd";

const MyCertificate = () => (
  <Card bordered={true} className="CardConfig">
    <h2>MY CERTIFICATE</h2>
    <Divider />
    <div className="DisplayCenter">
      <Carousel effect="fade" style={{ width: "60vw",height:'61vh' }}>
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Certificate_FutureSkill (1).jpg" alt="" />
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Certificate_FutureSkill (2).jpg" alt="" />
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Certificate_FutureSkill (3).jpg" alt="" />
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Certificate_FutureSkill (4).jpg" alt="" />
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Certificate_FutureSkill (5).jpg" alt="" />
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Udemy_Bootcamp.jpg" alt="" />
        <Image width={'50vw'} height={'60vh'} src="MyPic/MyCer/Udemy_MERN.jpg" alt="" />
      </Carousel>
    </div>
  </Card>
);
export default MyCertificate;
