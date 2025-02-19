import React, { useState } from "react";
import { Button, ConfigProvider, Tabs } from "antd";
import { EditFilled } from "@ant-design/icons";
import MedicalHistory from "./MedicalHistory/page";
import HealthEquity from "./HealthEquity/page";
import Pharmacy from "./Pharmacy/page";
import LifeStyle from "./LifeStyle/page";
import UpdateMedicalHistory from "./HealthInfoUpdateForms/UpdateMedicalHistory";
import UpdateHealthEquity from "./HealthInfoUpdateForms/UpdateHealthEquity";
import UpdateLifestyle from "./HealthInfoUpdateForms/UpdateLifestyle";
import UpdatePharmacy from "./HealthInfoUpdateForms/UpdatePharmacy";
import UpdateModal from "./UpdateModal";

const items = [
  {
    key: "1",
    label: "Medical History",
    children: <MedicalHistory />,
    UpdateForms: <UpdateMedicalHistory />,
  },
  {
    key: "2",
    label: "Health Equity Info",
    children: <HealthEquity />,
    UpdateForms: <UpdateHealthEquity />,
  },
  {
    key: "3",
    label: "LifeStyle",
    children: <LifeStyle />,
    UpdateForms: <UpdateLifestyle />,
  },
  {
    key: "4",
    label: "Pharmacy",
    children: <Pharmacy />,
    UpdateForms: <UpdatePharmacy />,
  },
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
      style={{ fontSize: "14px" }}
    >
      Update {activeLabel}
    </Button>
  );

  const [open, setOpen] = useState(false);

  const handleSave = () => {
    console.log("Updating data");
  };

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
      <UpdateModal
        open={open}
        handleSave={handleSave}
        setOpen={setOpen}
        innerForm={items[activeKey].updateModalInnerForm}
        title={items[activeKey].label}
      />
    </ConfigProvider>
  );
};

export default TabSection;
