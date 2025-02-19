import { Button, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/slices/UpdateModalSlice";

const UpdateModal = ({open, handleSave, innerForm, title }) => {
  const UpdateModalSlice = useSelector((state) => state.UpdateModalSlice);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setOpen(""));
  };
  console.log(UpdateModalSlice);

  return (
    <>
      <Modal
        open={open}
        title={`Update ${title}`}
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
