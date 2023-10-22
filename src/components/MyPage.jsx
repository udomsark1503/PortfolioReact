import React from "react";
import FirstInfo from "./FirstInfo";
import { Col, Row } from "antd";
import Education from "./Education";
import Personal from "./Personal";
import SoftwareSkill from "./SoftwareSkill";
import JobHistory from "./JobHistory";
import MyCertificate from "./MyCertificate";

const MyPage = () => {
  return (
    <>
      <Row>
        <FirstInfo />
      </Row>
      <Row>
        <Col flex="1 1 55%">
        <Education />
        <JobHistory />
        <MyCertificate />
        </Col>
        <Col flex="1 1 30%" >
        <Personal />
        <SoftwareSkill />
        </Col>
      </Row>
      <Row>
        <Col className="footer" flex='1 1 auto'>Copyright © MaxkyoTHo</Col>
      </Row>
    </>
  );
};
export default MyPage;
