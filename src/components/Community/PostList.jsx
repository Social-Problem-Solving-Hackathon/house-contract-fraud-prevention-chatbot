import { Table, Tooltip } from "antd";
import styled from "styled-components";
import freeBoardData from "../../assets/json/freeBoardData.json";
import incidentSharingBoardData from "../../assets/json/IncidentSharingBoardData.json";
import healingBoardData from "../../assets/json/healingBoardData.json";
import realEstateBoardData from "../../assets/json/realEstateEstimationBoardData.json";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    width: 80,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    ellipsis: {
      showTitle: false,
    },
    render: (title) => (
      <Tooltip placement="top" title={title}>
        {title}
      </Tooltip>
    ),
  },
  {
    title: "Writer",
    dataIndex: "writer",
    key: "writer",
    width: 150,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 150,
  },
  {
    title: "Views",
    dataIndex: "view",
    key: "view",
    width: 80,
  },
  {
    title: "Likes",
    dataIndex: "like",
    key: "like",
    width: 80,
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
    width: 120,
  },
];

const PostList = ({ selectedMenu }) => {
  const navigate = useNavigate();

  const selectedData = () => {
    if (selectedMenu === 0) {
      return freeBoardData;
    } else if (selectedMenu === 1) {
      return incidentSharingBoardData;
    } else if (selectedMenu === 2) {
      return healingBoardData;
    } else if (selectedMenu === 3) {
      return realEstateBoardData;
    }
  };
  return (
    <Container>
      <TableStyled
        columns={columns}
        dataSource={selectedData()}
        pagination={{ position: ["bottomCenter"] }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log(record, rowIndex);
              navigate("/post");
            },
          };
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 3rem;
  padding-top: 0.5rem;
`;

const TableStyled = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #a5d6a7 !important;
    color: #1b5e1f;
  }
  .ant-pagination .ant-pagination-item-active {
    border-color: #43a046;
  }

  .ant-pagination .ant-pagination-item-active a {
    color: #43a046;
  }
`;

export default PostList;
