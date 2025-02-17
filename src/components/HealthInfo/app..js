import CollapseSections from "./CollapseSections";
import TabSection from "./TabSection";

const HealthInfo = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItem: "start",
        margin: "0px",
      }}
    >
      <div
        style={{
          height: "96vh",
          width: "fit-content",
          overflow: "auto",
          backgroundColor: "#E6F5FC",
          padding: "2vh",
        }}
      >
        <div
          style={{
            height: "fit-content",
            backgroundColor: "white",
            padding: "20px",
          }}
          className="responsiveWidth"
        >
          <TabSection />
          <CollapseSections />
        </div>
      </div>
    </div>
  );
};

export default HealthInfo;
