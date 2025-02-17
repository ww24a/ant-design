import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; // Importing an icon
import { Badge, Button, Space, Table } from "antd";
const columns = [
  {
    title: "Reactant",
    dataIndex: "Reactant",
    key: "Reactant",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
  {
    title: "Reaction Severity",
    dataIndex: "ReactionSeverity",
    key: "ReactionSeverity",
  },
  {
    title: "Reaction Type",
    key: "ReactionType",
    dataIndex: "ReactionType",
  },
  {
    title: "Date Added",
    key: "DateAdded",
    dataIndex: "DateAdded",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="small">
        <Button
          icon={<EditOutlined />}
          type="text"
          className="collapseText blueText"
          size="small"
        ></Button>
        <Button
          icon={<DeleteOutlined />}
          type="text"
          className="collapseText"
          size="small"
          style={{ color: "rgba(247, 109, 0, 1)" }}
        ></Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    DateAdded: "11/12/2024",
    ReactionType: "Allergy",
    ReactionSeverity: "-",
    Status: <Badge color="#f50" text="Current" />,
    Reactant: "Ecallantide",
  },
  {
    key: "2",
    DateAdded: "11/12/2024",
    ReactionType: "Allergy",
    ReactionSeverity: "-",
    Status: <Badge color="#f50" text="Current" />,
    Reactant: "Ecallantide",
  },
  {
    key: "3",
    DateAdded: "11/12/2024",
    ReactionType: "Allergy",
    ReactionSeverity: "-",
    Status: <Badge color="#f50" text="Current" />,
    Reactant: "Ecallantide",
  },
];
const Allergy = () => {
  return (
    <div style={{ overflow: "auto" }}>
      <Table
        columns={columns}
        pagination={false}
        dataSource={data}
        components={{
          header: {
            cell: (props) => <th {...props} className="custom-header" />,
          },
        }}
        style={{ borderRadius: "15px" }}
      />
    </div>
  );
};
export default Allergy;
