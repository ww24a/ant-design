import { Col, Row } from "antd";
import {
  detailText,
  // gutterRow,
  headingText,
} from "../MedicalHistory/InnerSections/PastMedical";



const rowItems = [
  {
    heading: "Sexual Orientation",
    detail: "Straight",
  },
  {
    heading: "Birth Gender",
    detail: "Female",
  },
  {
    heading: "Current Gender",
    detail: "Female",
  },
  {
    heading: "Pronouns",
    detail: "She/Her",
  },
  {
    heading: "Race",
    detail: "Asian",
  },
  {
    heading: "Ethnicity",
    detail: "South Asian",
  },
];


const HealthEquity = () => {
  return (
    <Row
      gutter={[4, 4]}
      style={{gap:"4px", marginBottom: "4px" }}
    >
      {rowItems.map((item, index) => (
        <Col key={index}  xs={24} sm={12} md={5}>
          <div style={headingText}>{item.heading}</div>
          <div style={detailText}>{item.detail}</div>
        </Col>
      ))}
    </Row>

  );
};

export default HealthEquity;
