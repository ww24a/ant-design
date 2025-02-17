import React from "react";
import { Collapse, Space, Button } from "antd";
import { EditOutlined } from "@ant-design/icons"; // Importing an icon
import PastMedical from "./CollapseInnerSections/PastMedical";
import Allergy from "./CollapseInnerSections/Allergy";
import PastSurgical from "./CollapseInnerSections/PastSurgical";
import MedicationHistory from "./CollapseInnerSections/MedicationHistory";
import FamilyHistory from "./CollapseInnerSections/FamilyHistory";

const collapseItems = [
  { label: "Past Medical", component: <PastMedical /> },
  { label: "Past Surgical", component: <PastSurgical /> },
  { label: "Allergy", component: <Allergy /> },
  { label: "Medication History", component: <MedicationHistory /> },
  { label: "Family History", component: <FamilyHistory /> },
];

const CollapseSections = () => (
  <Space
    direction="vertical"
    className="collapseText"
    style={{ width: "100%" }}
  >
    {collapseItems.map((item, index) => (
      <Collapse
        collapsible="header"
        destroyInactivePanel={true}
        bordered={false}
        expandIconPosition="start"
        defaultActiveKey={["0", "2"]}
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)",
        }}
        items={[
          {
            key:  index ,
            label: item.label,
            children: item.component,
            extra: (
              <Button
                icon={<EditOutlined />}
                type="text"
                onClick={() => console.log(index)}
                className="collapseText blueText"
                size="small"
              >
                Update
              </Button>
            ),
          },
        ]}
      />
    ))}
  </Space>
);

export default CollapseSections;
