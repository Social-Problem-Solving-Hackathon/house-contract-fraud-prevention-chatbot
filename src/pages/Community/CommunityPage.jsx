import { Layout } from "antd";
import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import MainMenu from "../../components/Common/MainMenu";
import PostList from "../../components/Community/PostList";
import { useState } from "react";

const CommunityPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const selectedMenuExplain = () => {
    if (selectedMenu === 0) {
      return "* This is a bulletin board that freely shares various opinions.";
    } else if (selectedMenu === 1) {
      return "* This is a bulletin board that shares cases of Jeonse Fraud";
    } else if (selectedMenu === 2) {
      return "* This is a bulletin board that shares good news and new information.";
    } else if (selectedMenu === 3) {
      return "* This is a bulletin board that shares information related to real estate.";
    }
  };

  return (
    <>
      <LayoutStyled
        style={{
          minWidth: "100dvw",
          minHeight: "100dvh",
          overflowY: "hidden",
        }}
      >
        <MainMenu selectedKey={"3"} />
        <Container>
          <MainHeader />
          <MenuBox>
            <MenuButtonBox>
              <MenuButton
                className={selectedMenu === 0 && "selectedMenuButton"}
                onClick={() => setSelectedMenu(0)}
              >
                Free Board
              </MenuButton>
              <MenuButton
                className={selectedMenu === 1 && "selectedMenuButton"}
                onClick={() => setSelectedMenu(1)}
              >
                Jeonse Fraud Sharing Board
              </MenuButton>
              <MenuButton
                className={selectedMenu === 2 && "selectedMenuButton"}
                onClick={() => setSelectedMenu(2)}
              >
                Healing Board
              </MenuButton>
              <MenuButton
                className={selectedMenu === 3 && "selectedMenuButton"}
                onClick={() => setSelectedMenu(3)}
              >
                Real Estate Information Board
              </MenuButton>
            </MenuButtonBox>
            <WriteButton>+ Write</WriteButton>
          </MenuBox>
          <Explain>{selectedMenuExplain()}</Explain>
          <PostList selectedMenu={selectedMenu} />
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

const MenuBox = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  //gap: 1rem;
  margin: 2rem 3rem;
  margin-bottom: 0;
  //padding: 1rem;
  //width: max-content;
  border-bottom: 2px solid #c7c7c7;
  /* width: 100%; */
  //background-color: white;
  //border-radius: 1rem;
  //box-shadow: 0px 0px 15px 1px rgb(230, 230, 230);

  .selectedMenuButton {
    color: black;
    border-bottom: 3px solid #43a046;
  }
`;

const MenuButtonBox = styled.div`
  display: flex;
  width: inherit;
`;

const MenuButton = styled.div`
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: transparent;
  color: gray;
  border: none;
`;

const WriteButton = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  background-color: transparent;
  color: white;
  border: none;
  background-color: #43a046;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 1px rgb(230, 230, 230);

  &:hover {
    background-color: #237d31;
  }
`;

const Explain = styled.div`
  margin-left: 3rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #43a046;
`;

export default CommunityPage;
