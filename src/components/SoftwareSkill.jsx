import React from "react";
import { Card, Divider, Row, Col, Image } from "antd";

const SoftwareSkill = () => (
  <Card bordered={true} className="CardConfig2">
    <h2>SOFTWARE SKILL</h2>
    <Divider />
    <Row gutter={[24, 24]}>
      <Row gutter={[24, 24]}>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/HTML5.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/css.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/javascript.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/python.png" alt="" />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/c.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/Csharp.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/jquery.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/mysql.png" alt="" />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/mongodb.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/PostGresSQL.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/nodejs.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/react.png" alt="" />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image
          
            src="MyPic/nextjs-icon-2048x1234-pqycciiu.png"
            alt=""
          />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image src="MyPic/Bootstrap.png" alt="" />
        </Col>
        <Col xs={12} sm={6} xl={6} xxl={6}>
          <Image
          
            src="MyPic/antDesignLogo.png"
            alt=""
          />
        </Col>
      </Row>
    </Row>
  </Card>
);
export default SoftwareSkill;
