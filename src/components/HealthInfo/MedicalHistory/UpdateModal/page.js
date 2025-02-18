import { Button, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const UpdateModal = ({ open, handleSave, setOpen, innerForm, title }) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        title={title}
        onOk={handleSave}
        onCancel={handleCancel}
        width={"900px"}
        closeIcon={<CloseCircleOutlined style={{ fontSize: "20px" }} />}
        footer={() => (
          <>
            <Button
              onClick={handleCancel}
              style={{ color: "rgba(247, 109, 0, 1)", border: "none" }}
            >
              Cancel
            </Button>
            <Button
              variant="filled"
              onClick={handleSave}
              shape="round"
              style={{
                backgroundColor: "rgba(0, 157, 221, 1)",
                color: "white",
              }}
            >
              Update
            </Button>
          </>
        )}
      >
        {innerForm}
      </Modal>
    </>
  );
};

export default UpdateModal;
