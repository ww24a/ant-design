import React, { useState } from "react";
import { Button, ConfigProvider, Tabs } from "antd";
import { EditFilled } from "@ant-design/icons";
import MedicalHistory from "./MedicalHistory/page";
import HealthEquity from "./HealthEquity/page";
import Pharmacy from "./Pharmacy/page";
import LifeStyle from "./LifeStyle/page";

const items = [
  { key: "1", label: "Medical History", children: <MedicalHistory /> },
  { key: "2", label: "Health Equity Info", children: <HealthEquity /> },
  { key: "3", label: "LifeStyle", children: <LifeStyle /> },
  { key: "4", label: "Pharmacy", children: <Pharmacy /> },
];

const TabSection = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
    setActiveKey(key);
  };

  const activeLabel = items.find((item) => item.key === activeKey)?.label;

  const updateButton = (
    <Button
      icon={<EditFilled />}
      type="text"
      className="collapseText blueText"
      size="small"
    >
      Update {activeLabel}
    </Button>
  );

  return (
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
        tabBarExtraContent={updateButton}
      />
    </ConfigProvider>
  );
};

export default TabSection;
