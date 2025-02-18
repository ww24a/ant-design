import React from "react";
import { Col, Row } from "antd";

const secondRowItems = [
  {
    heading: "Do you have any current medical conditions (e.g., diabetes)?",
    detail: "Yes.",
  },
  {
    heading: "Do you smoke or use tobacco products?",
    detail: "Yes, allergic to penicillin and peanuts.",
  },
  {
    heading: "Has anyone in your family been diagnosed with genetic disorder?",
    detail: "Yes, ibuprofen for occasional headaches and a daily multivitamin.",
  },
  {
    heading: "How often do you exercise?",
    detail: "High blood pressure and mild asthma.",
  },
  {
    heading: "Have you had any surgeries or hospitalizations in the past?",
    detail: "I drink alcohol socially, no tobacco or drug use.",
  },
  {
    heading: "How often do you exercise?",
    detail: "High blood pressure and mild asthma.",
  },
];

export const gutterRow = {
  background: "rgba(230, 245, 252, 0.5)",
  padding: "8px 8px",
  // border: "1px solid rgba(230, 245, 252, 0.9)",
  textAlign: "start",
  borderRadius: "15px",
};
export const headingText = {
  fontSize: "11px",
  paddingLeft: "8px",
  paddingRight: "8px",
  fontWeight: "600",
  color: "rgba(153, 153, 153, 1)",
};

export const detailText = {
  fontSize: "12px",
  paddingLeft: "8px",
  paddingRight: "8px",
  fontWeight: "600",
};

const PastMedical = () => (
  <>
    <Row gutter={[4, 4]} style={{gap:"4px",  marginBottom: "4px" }}>
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

    <Row
      gutter={[4, 4]}
      style={{ marginBottom: "4px" }}
    >
      {secondRowItems.map((item, index) => (
        <Col key={index} style={gutterRow} xs={24} sm={12} md={12}>
          <div style={headingText}>{item.heading}</div>
          <div style={detailText}>{item.detail}</div>
        </Col>
      ))}
    </Row>

    <Row gutter={[4, 4]} style={{ marginBottom: "4px" }}>
      <Col style={gutterRow} xs={24}>
        <div style={headingText}>
          Do any family members have a history of mental health conditions?
        </div>
        <div style={detailText}>
          Appendectomy in 2015 and hospitalization for pneumonia in 2020.
        </div>
      </Col>
    </Row>
  </>
);
export default PastMedical;
