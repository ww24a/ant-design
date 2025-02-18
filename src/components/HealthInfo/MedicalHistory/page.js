import React, { useState } from "react";
import { Collapse, Space, Button } from "antd";
import { CaretUpFilled, EditFilled } from "@ant-design/icons"; // Importing an icon
import PastMedical from "./InnerSections/PastMedical";
import Allergy from "./InnerSections/Allergy";
import FamilyHistory from "./InnerSections/FamilyHistory";
import PastSurgical from "./InnerSections/PastSurgical";
import MedicationHistory from "./InnerSections/MedicationHistory";
// modal files
import UpdateModal from "./UpdateModal/page";
// modal inner pages (forms)
import UpdatePastMedical from "./UpdateModal/UpdatePastMedical";
import UpdatePastSurgical from "./UpdateModal/UpdatePastSurgical";
import UpdateAllergy from "./UpdateModal/UpdateAllergy";
import UpdateMedicationHistory from "./UpdateModal/UpdateMedicationHistory";
import UpdateFamilyHistory from "./UpdateModal/UpdateFamilyHistory";

const collapseItems = [
  {
    label: "Past Medical",
    component: <PastMedical />,
    updateModalInnerForm: <UpdatePastMedical />,
  },
  {
    label: "Past Surgical",
    component: <PastSurgical />,
    updateModalInnerForm: <UpdatePastSurgical />,
  },
  {
    label: "Allergy",
    component: <Allergy />,
    updateModalInnerForm: <UpdateAllergy />,
  },
  {
    label: "Medication History",
    component: <MedicationHistory />,
    updateModalInnerForm: <UpdateMedicationHistory />,
  },
  {
    label: "Family History",
    component: <FamilyHistory />,
    updateModalInnerForm: <UpdateFamilyHistory />,
  },
];

const MedicalHistory = () => {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    console.log("Updating data");
  };

  return (
    <Space
      direction="vertical"
      className="collapseText"
      style={{ width: "100%" }}
    >
      {collapseItems.map((item, index) => (
        <>
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
                    onClick={() => setOpen(item.label)}
                    className="collapseText blueText"
                    size="small"
                  >
                    Update
                  </Button>
                ),
              },
            ]}
          />
          <UpdateModal
            open={open === item.label}
            handleSave={handleSave}
            setOpen={setOpen}
            innerForm={item.updateModalInnerForm}
            title={item.label}
          />
        </>
      ))}
    </Space>
  );
};

export default MedicalHistory;
