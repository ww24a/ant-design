import { Col, Row } from "antd";
import {
  detailText,
  gutterRow,
  headingText,
} from "../MedicalHistory/InnerSections/PastMedical";

const HealthEquity = () => {
  return (
    <Row gutter={[16]} style={{ marginBottom: "10px" }}>
      <Col style={gutterRow} xs={24} sm={12} md={5}>
        <div style={headingText}>Weight</div>
        <div style={detailText}>90lbs</div>
      </Col>
      <Col style={gutterRow} xs={24} sm={12} md={5}>
        <div style={headingText}>Height</div>
        <div style={detailText}>5'7"</div>
      </Col>
      <Col style={gutterRow} xs={24} sm={12} md={5}>
        <div style={headingText}>BMI</div>
        <div style={detailText}>4.4</div>
      </Col>
    </Row>
  );
};

export default HealthEquity;
