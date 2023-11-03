import React from "react";
import { Card, Descriptions, Divider } from "antd";
const items = [
  {
    key: '1',
    label: 'Nick Name',
    children: 'Max',
  },
  {
    key: '2',
    label: 'Born',
    children: 'July 10, 1996',
  },
  {
    key: '3',
    label: 'Nationality',
    children: 'Thai',
  },
  {
    key: '4',
    label: 'Telephone Number',
    children: '087-1503161',
  },
  {
    key: '5',
    label: 'E-mail',
    children: 'udomsark1863@hotmail.com',
  },
  {
    key: '6',
    label: 'Line',
    children: 'themaxky1863',
  },
  {
    key: '7',
    label: 'Facebook',
    children: 'Max Udomsak',
  },
  {
    key: '8',
    label: 'Status',
    children: 'Single',
  },
  {
    key: '9',
    label: 'Address',
    children: '166/671 Niran Condotel 2, Donmuange',
  },
];
const Personal = () => (
  <Card bordered={true} className="CardConfig2">
  <h2>PERSONAL</h2>
  <Divider />
    <Descriptions style={{textAlign:'left'}} bordered items={items} column={1}/>
  </Card>
);
export default Personal;
