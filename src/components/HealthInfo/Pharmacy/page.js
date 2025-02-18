import { Col, Row } from "antd";
import { detailText, headingText } from "../MedicalHistory/InnerSections/PastMedical";

const rowItems = [
  {
    heading: "Pharmacy",
    detail: "ABC Hawaii Pharmacy",
  },
  {
    heading: "Pharmacy Type",
    detail: "Mail Order | EPCS",
  },
  {
    heading: "City",
    detail: "Hawaii",
  },
  {
    heading: "State/Province",
    detail: "Hawaii",
  },
  {
    heading: "Zip Code",
    detail: "87678",
  },
];


const Pharmacy = () => {
    return (
      <>
        <Row gutter={[4, 4]} style={{ gap: "4px", marginBottom: "4px" }}>
          {rowItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={5}>
              <div style={headingText}>{item.heading}</div>
              <div style={detailText}>{item.detail}</div>
            </Col>
          ))}
        </Row>
      </>
    );
}

export default Pharmacy;