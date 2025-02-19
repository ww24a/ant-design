import { Form, Select, Row, Col, Radio, Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const options = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

const plainOptions = [
  "Weekly",
  "Daily",
  "Did Once",
  "At Times",
  "Often",
  "Rare",
  "Occasional",
  "Never",
  "Weekly",
  "Weekly",
];

const UpdatePastMedical = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <Form style={{ padding: "10px 0px" }} className="" layout="vertical">
      <Row gutter={8}>
        <Col xs={24} sm={24}>
          <Form.Item
            label="Do you have any current medical conditions (e.g., diabetes)?"
            style={{ margin: "4px" }}
          >
            <TextArea rows={3} placeholder="Enter Answer" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24}>
          <Form.Item
            label="Do you have any current medical conditions (e.g., diabetes)?"
            style={{ margin: "4px" }}
          >
            <Col xs={24} sm={12}>
              <Radio.Group
                block
                options={options}
                defaultValue="Yes"
                optionType="button"
                buttonStyle="solid"
              />{" "}
            </Col>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24}>
          <Form.Item
            label="Do you have any current medical conditions (e.g., diabetes)?"
            style={{ margin: "4px" }}
          >
            <Checkbox.Group onChange={onChange} style={{ width: "100%" }}>
              <Row justify={"start"} gutter={[8, 8]}>
                {plainOptions.map((item) => (
                  <Col span={6}>
                    <Checkbox
                      value={item}
                      optionType="button"
                      style={{
                        border: "1px solid rgba(230, 230, 230, 1)",
                        borderRadius: "10px",
                        padding: "7px 10px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row-reverse",
                        textAlign: "start",
                      }}
                    >
                      <span style={{ flex: 1 }}>{item}</span>
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24}>
          <Form.Item
            label="Do you have any current medical conditions (e.g., diabetes)?"
            style={{ margin: "4px" }}
          >
            <Input placeholder="Enter Answer" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24}>
          <Form.Item
            label="Do you have any current medical conditions (e.g., diabetes)?"
            style={{ margin: "4px" }}
          >
            <Input placeholder="Enter Answer" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default UpdatePastMedical;
