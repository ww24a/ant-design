import React from "react";
import { ConfigProvider, Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Medical History",
    children: "",
  },
  {
    key: "2",
    label: "Health Equity Info",
    children: "",
  },
  {
    key: "3",
    label: "LifeStyle",
    children: "",
  },
  {
    key: "4",
    label: "Pharmacy",
    children: "",
  },
];
const TabSection = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          itemColor: "#999999", 
          itemActiveColor: "black", 
        },
      },
    }}
  >
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      style={{ borderColor: "red" }}
    />
  </ConfigProvider>
);
export default TabSection;
