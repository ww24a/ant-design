import { useState } from "react";
import TabSection from "./TabSection";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";

const HealthInfo = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItem: "start",
        margin: "0px",
      }}
    >
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ position: "absolute", left: "0px" }}
      >
        Open
      </Button>
      <Drawer
        open={!open}
        onClose={onClose}
        closeIcon={<CloseCircleOutlined />}
        style={{
          overflow: "auto",
          backgroundColor: "#E6F5FC",
        }}
        width={"811px"}
        title={"My Health Info"}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            width:"calc(100% - 48px)"
          }}
        >
          <TabSection />
        </div>
      </Drawer>
    </div>
  );
};

export default HealthInfo;
