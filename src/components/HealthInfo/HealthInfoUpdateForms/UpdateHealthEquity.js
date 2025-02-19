import { Form, Select, Row, Col } from "antd";

const UpdateHealthEquity = () => {
  return (
    <Form style={{ padding: "10px 0px" }} layout="vertical">
      <Row gutter={8}>
        <Col xs={24} sm={12}>
          <Form.Item label="Sexual Orientation" style={{ margin: "4px" }}>
            <Select placeholder={"Select Sexual Orientation"}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Pronouns" style={{ margin: "4px" }}>
            <Select placeholder={"Select Pronouns"}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Gender Assigned At Birth" style={{ margin: "4px" }}>
            <Select placeholder={"Select Gender Assigned At Birth"}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Current Gender" style={{ margin: "4px" }}>
            <Select placeholder={"Select Current Gender"}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Ethnicity" style={{ margin: "4px" }}>
            <Select placeholder={"Select Ethnicity"}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item label="Race" style={{ margin: "4px" }}>
            <Select placeholder={"Select Race"}>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default UpdateHealthEquity;
