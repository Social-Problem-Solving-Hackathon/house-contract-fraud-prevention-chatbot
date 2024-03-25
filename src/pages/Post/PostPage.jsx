import { Layout } from "antd";
import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import ChatInput from "../../components/Main/ChatInput";
import MainMenu from "../../components/Common/MainMenu";

const PostPage = () => {
  return (
    <>
      <LayoutStyled
        style={{
          minWidth: "100dvw",
          minHeight: "100dvh",
          overflowY: "hidden",
        }}
      >
        <MainMenu selectedKey={"1"} />
        <Container>
          <MainHeader />
          <ContentContainer>foeifhwoij</ContentContainer>
          <ChatInput />
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

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 4rem 5rem 4rem;
  width: inherit;
  overflow-y: scroll;
`;

export default PostPage;
