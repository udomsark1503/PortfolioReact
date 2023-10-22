import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Card, Divider, Timeline } from "antd";
const JobHistory = () => (
  <Card bordered={true} className="CardConfig">
    <h2>WORK EXPERIENCE</h2>
    <Divider />
    <Timeline
      mode="alternate"
      items={[
        {
          children: (
            <>
              Receptionist / Don mueang Place Hotel <br />
              [2019-08-01 - 2019-10-31]
            </>
          ),
        },
        {
          children: (
            <>
              Admin Project Air Condition / Smart Com CO,LTD.
              <br />
              [2019-11-01 - 2020-03-31]
            </>
          ),
          color: "green",
        },
        {
          color: "red",
          children: (
            <>
              Admin Head Office / Smart Com CO,LTD.
              <br />
              [2020-04-01 - 2023-08-31]
            </>
          ),
        },
        {
          dot: (
            <ClockCircleOutlined
              style={{
                fontSize: "16px",
              }}
            />
          ),
          children: (
            <>
              Web Full-Stack Developer / Smart Com CO,LTD.
              <br />
              [2020-09-01 - Currently]
            </>
          ),
        },
      ]}
    />
  </Card>
);
export default JobHistory;
