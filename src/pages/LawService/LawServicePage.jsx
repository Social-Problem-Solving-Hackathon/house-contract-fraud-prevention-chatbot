import { Layout } from "antd";
import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import MainMenu from "../../components/Common/MainMenu";
import LawyerList from "../../components/LawService/LawyerList";

const LawServicePage = () => {
  return (
    <>
      <LayoutStyled
        style={{
          minWidth: "100dvw",
          minHeight: "100dvh",
          overflowY: "hidden",
        }}
      >
        <MainMenu selectedKey={"2"} />
        <Container>
          <MainHeader />
          <LawyerList />
        </Container>
      </LayoutStyled>
    </>
  );
};

const LayoutStyled = styled(Layout)`
  .ant-layout-sider {
    background-color: white;
  }

  .ant-menu-light.ant-menu-root.ant-menu-inline {
    background-color: transparent;
    border-inline-end: none;
  }

  .ant-menu-light .ant-menu-item-selected {
    //background-color: #d5f2bb;
  }

  .ant-layout-sider-trigger {
    background-color: #eee;
    svg {
      fill: black;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;

export default LawServicePage;
