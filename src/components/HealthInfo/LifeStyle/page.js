import { Button, Col, Row } from "antd";
import {
  detailText,
  gutterRow,
  headingText,
} from "../MedicalHistory/InnerSections/PastMedical";
import { DownloadOutlined } from "@ant-design/icons";
import myImg from "../../../assets/images/bowsprit_daisy_1_559463.jpg";

const rowItems = [
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
    image: myImg,
  },
];

const LifeStyle = () => {
  return (
    <>

    <Row gutter={[4, 4]} style={{ marginBottom: "4px" }}>
      {rowItems.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={12}>
          <div
            key={index}
            style={{ ...gutterRow, height: "calc(100% - 18px)" }}
          >
            <div style={headingText}>
              {item.heading}
              {item.image && (
                <Button
                  size="small"
                  style={{
                    backgroundColor: "rgba(230, 245, 252, 1)",
                    border: "none",
                  }}
                >
                  <img
                    src={item.image}
                    alt="download"
                    style={{
                      width: "19px",
                      height: "16px",
                      borderRadius: "3px",
                      margin: "0px",
                    }}
                  />
                  {<DownloadOutlined />}
                </Button>
              )}
            </div>
            <div style={detailText}>{item.detail}</div>
          </div>
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
};

export default LifeStyle;
