import React from "react";
import { Col, Row } from "antd";
const style = {
  background: "rgba(230, 245, 252, 0.5)",
  padding: "8px 0px",
  border: "1px solid rgba(230, 245, 252, 0.9)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItem: "end",
  width: "100%",
  textAlign: "start",
  borderRadius: "15px",
};

const headingText = {
  fontSize: "11px",
  paddingLeft: "8px",
  fontWeight: "600",
  color: "rgba(153, 153, 153, 1)",
};
const detailText = {
  fontSize: "12px",
  paddingLeft: "8px",
  fontWeight: "600",
};

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

const PastMedical = () => (
  <>
    <Row gutter={[16]} style={{ marginBottom: "10px" }}>
      <Col className="gutter-row" span={5}>
        <div style={style}>
          <div style={headingText}>Weight</div>
          <div style={detailText}>90lbs</div>
        </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div style={style}>
          <div style={headingText}>Height</div>
          <div style={detailText}>5'7"</div>
        </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div style={style}>
          <div style={headingText}>BMI</div>
          <div style={detailText}>4.4</div>
        </div>
      </Col>
    </Row>

    <Row gutter={[16, 24]} style={{ rowGap: "10px", marginBottom: "10px" }}>
      {secondRowItems.map((item) => (
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <div style={headingText}>{item.heading}</div>
            <div style={detailText}>{item.detail}</div>
          </div>
        </Col>
      ))}
    </Row>

    <Row gutter={[16, 24]} style={{ rowGap: "10px", marginBottom: "10px" }}>
      <Col className="gutter-row" span={24}>
        <div style={style}>
          <div style={headingText}>
            Do any family members have a history of mental health conditions?
          </div>
          <div style={detailText}>
            Appendectomy in 2015 and hospitalization for pneumonia in 2020.
          </div>
        </div>
      </Col>
    </Row>
  </>
);
export default PastMedical;
