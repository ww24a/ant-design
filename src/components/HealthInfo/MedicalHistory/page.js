import React from "react";
import { Collapse, Space, Button } from "antd";
import { CaretUpFilled, EditFilled } from "@ant-design/icons"; // Importing an icon
import PastMedical from "./InnerSections/PastMedical";
import Allergy from "./InnerSections/Allergy";
import FamilyHistory from "./InnerSections/FamilyHistory";
import PastSurgical from "./InnerSections/PastSurgical";
import MedicationHistory from "./InnerSections/MedicationHistory";

const collapseItems = [
  { label: "Past Medical", component: <PastMedical /> },
  { label: "Past Surgical", component: <PastSurgical /> },
  { label: "Allergy", component: <Allergy /> },
  { label: "Medication History", component: <MedicationHistory /> },
  { label: "Family History", component: <FamilyHistory /> },
];

const MedicalHistory = () => (
  <Space
    direction="vertical"
    className="collapseText"
    style={{ width: "100%" }}
  >
    {collapseItems.map((item, index) => (
      <Collapse
        key={index}
        collapsible="header"
        destroyInactivePanel={true}
        bordered={false}
        expandIconPosition="start"
        defaultActiveKey={["0", "2"]}
        expandIcon={({ isActive }) => (
          <CaretUpFilled rotate={isActive ? 0 : 180} />
        )}
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)",
        }}
        items={[
          {
            key: index,
            label: item.label,
            children: item.component,
            extra: (
              <Button
                icon={<EditFilled />}
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

export default MedicalHistory;
