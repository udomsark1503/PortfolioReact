import React from "react";
import { Card, Col, Row, Image, Divider } from "antd";
const Education = () => (
  <Card className="CardConfig" bordered={true}>
    <h2>EDUCATION</h2>
    <Divider />
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Card className="CardEducation" bordered={true}>
          <Row>
            <Col xs={24} sm={6} md={24} lg={24} xl={6} xxl={6} className="DisplayCenter">
              <Image height={"100px"} src="/MyPic/Seekan Logo.png" />
            </Col>
            <Col xs={24} sm={18} md={24} lg={24} xl={18} xxl={18} className="EducationInfo">
              <div>
                <p>Seekan Wattananunuppathum School</p>
                <p>English-Mathematics / GPA : 2.99</p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Card className="CardEducation" bordered={true}>
          <Row>
            <Col xs={24} sm={6} md={24} lg={24} xl={6} xxl={6} className="DisplayCenter">
              <Image height={"100px"} src="/MyPic/Rumutto.png" />
            </Col>
            <Col xs={24} sm={18} md={24} lg={24} xl={18} xxl={18} className="EducationInfo">
              <div>
                <p>Rajamangala University of Technology Tawan-ok</p>
                <p>Management / GPA : 3.24</p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Card>
);
export default Education;
