import { Table, Tooltip } from "antd";
import styled from "styled-components";
import dummyData from "../../assets/json/postListData.json";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    width: 80,
  },
  {
    title: "제목",
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
    title: "작성자",
    dataIndex: "writer",
    key: "writer",
    width: 150,
  },
  {
    title: "작성일",
    dataIndex: "date",
    key: "date",
    width: 150,
  },
  {
    title: "조회수",
    dataIndex: "view",
    key: "view",
    width: 80,
  },
  {
    title: "추천수",
    dataIndex: "like",
    key: "like",
    width: 80,
  },
  {
    title: "댓글수",
    dataIndex: "comments",
    key: "comments",
    width: 80,
  },
];

const PostList = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TableStyled
        columns={columns}
        dataSource={dummyData}
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
