import { Modal } from "antd";

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
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        {innerForm}
      </Modal>
    </>
  );
};

export default UpdateModal;
