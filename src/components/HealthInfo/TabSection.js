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
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/slices/UpdateModalSlice";

const items = [
  {
    key: "1",
    label: "Medical History",
    children: <MedicalHistory />,
    updateModalInnerForm: <UpdateMedicalHistory />,
  },
  {
    key: "2",
    label: "Health Equity Info",
    children: <HealthEquity />,
    updateModalInnerForm: <UpdateHealthEquity />,
  },
  {
    key: "3",
    label: "LifeStyle",
    children: <LifeStyle />,
    updateModalInnerForm: <UpdateLifestyle />,
  },
  {
    key: "4",
    label: "Pharmacy",
    children: <Pharmacy />,
    updateModalInnerForm: <UpdatePharmacy />,
  },
];

const TabSection = () => {
  const [activeKey, setActiveKey] = useState("1");
  const dispatch = useDispatch();

  const onChange = (key) => {
    setActiveKey(key);
  };

  const activeLabel = items.find((item) => item.key === activeKey)?.label;
  console.log(activeLabel);

  const updateButton = (
    <Button
      icon={<EditFilled />}
      type="text"
      className="collapseText blueText"
      size="small"
      style={{ fontSize: "14px" }}
      onClick={() => {
        dispatch(setOpen(activeLabel));
      }}
    >
      Update {activeLabel}
    </Button>
  );

  const UpdateModalSlice = useSelector((state) => state.UpdateModalSlice);

  const handleSave = () => {
    console.log("Updating data");
  };
  console.log(items[activeKey]);

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
        open={UpdateModalSlice.open === activeLabel}
        handleSave={handleSave}
        innerForm={items[activeKey - 1].updateModalInnerForm}
        title={activeLabel}
      />
    </ConfigProvider>
  );
};

export default TabSection;
