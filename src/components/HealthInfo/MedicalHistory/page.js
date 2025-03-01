import React from "react";
import { Collapse, Space, Button } from "antd";
import { CaretUpFilled, EditFilled } from "@ant-design/icons"; // Importing an icon
import PastMedical from "./InnerSections/PastMedical";
import Allergy from "./InnerSections/Allergy";
import FamilyHistory from "./InnerSections/FamilyHistory";
import PastSurgical from "./InnerSections/PastSurgical";
import MedicationHistory from "./InnerSections/MedicationHistory";
// modal files
// modal inner pages (forms)
import UpdateModal from "../UpdateModal";
import UpdatePastMedical from "./UpdateForms/UpdatePastMedical";
import UpdatePastSurgical from "./UpdateForms/UpdatePastSurgical";
import UpdateAllergy from "./UpdateForms/UpdateAllergy";
import UpdateMedicationHistory from "./UpdateForms/UpdateMedicationHistory";
import UpdateFamilyHistory from "./UpdateForms/UpdateFamilyHistory";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../../redux/slices/UpdateModalSlice";

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
  const UpdateModalSlice = useSelector((state) => state.UpdateModalSlice);
  const dispatch = useDispatch();

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
                    onClick={() => dispatch(setOpen(item.label))}
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
            open={UpdateModalSlice.open === item.label}
            handleSave={handleSave}
            innerForm={item.updateModalInnerForm}
            title={item.label}
          />
        </>
      ))}
    </Space>
  );
};

export default MedicalHistory;
