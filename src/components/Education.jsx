import React from "react";
import { Card, Col, Row, Image, Divider } from "antd";
const Education = () => (
  <Card className="CardConfig" bordered={true}>
    <h2>EDUCATION</h2>
    <Divider />
    <Row gutter={[16, 16]}>
      <Col flex="1 1 auto">
        <Card className="CardEducation" bordered={true}>
          <Row>
            <Col flex="1 1 30%" className="DisplayCenter">
              <Image width={75} height={"100px"} src="/MyPic/Seekan Logo.png" />
            </Col>
            <Col flex="1 1 70%" className="EducationInfo">
              <div>
                <p>Seekan Wattananunuppathum School</p>
                <p>English-Mathematics / GPA : 2.99</p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col flex="1 1 auto">
        <Card className="CardEducation" bordered={true}>
          <Row>
            <Col flex="1 1 30%" className="DisplayCenter">
              <Image width={75} height={"100px"} src="/MyPic/Rumutto.png" />
            </Col>
            <Col flex="1 1 70%" className="EducationInfo">
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
