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
        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
          <Col xs={24}>
            <Education />
          </Col>
          <Col xs={24}>
            <JobHistory />
          </Col>
          <Col xs={24}>
            <MyCertificate />
          </Col>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
          <Col xs={24}>
            <Personal />
          </Col>
          <Col xs={24}>
            <SoftwareSkill />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="footer" flex="1 1 auto">
          Copyright © MaxkyoTHo
        </Col>
      </Row>
    </>
  );
};
export default MyPage;
