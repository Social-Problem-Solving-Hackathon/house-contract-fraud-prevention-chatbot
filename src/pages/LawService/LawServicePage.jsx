import { Layout } from "antd";
import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import MainMenu from "../../components/Common/MainMenu";
import LawyerList from "../../components/LawService/LawyerList";
import {
  EditTwoTone,
  LikeTwoTone,
  PhoneTwoTone,
  RightCircleFilled,
  ScheduleTwoTone,
} from "@ant-design/icons";

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
          <MenuContainer>
            <BannerBox>
              <BannerTitle>신속하고 정확한 법률 서비스 중개</BannerTitle>
              <BannerText>전세 사기를 당하셨나요? 여기로 오세요!</BannerText>
              <BannerText>전세 사기 피해를 최소화해드립니다</BannerText>
              <BannerButton>
                질문하기
                <RightCircleFilled />
              </BannerButton>
            </BannerBox>
            <ButtonBox>
              <Button>
                <ButtonText>상담 예약</ButtonText>
                <ButtonIcon>
                  <ScheduleTwoTone style={{ fontSize: "1.5rem" }} />
                </ButtonIcon>
              </Button>
              <Button>
                <ButtonText>상담글 작성</ButtonText>
                <ButtonIcon>
                  <EditTwoTone
                    twoToneColor={"#52c41a"}
                    style={{ fontSize: "1.5rem" }}
                  />
                </ButtonIcon>
              </Button>
              <Button>
                <ButtonText>빠른 상담</ButtonText>
                <ButtonIcon>
                  <PhoneTwoTone
                    twoToneColor={"gray"}
                    style={{ fontSize: "1.5rem" }}
                  />
                </ButtonIcon>
              </Button>
              <Button>
                <ButtonText>후기</ButtonText>
                <ButtonIcon>
                  <LikeTwoTone
                    twoToneColor={"#eb2f96"}
                    style={{ fontSize: "1.5rem" }}
                  />
                </ButtonIcon>
              </Button>
            </ButtonBox>
          </MenuContainer>
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
  align-items: center;
  width: 100%;
  height: 100dvh;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem;
  width: inherit;
`;

const BannerBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1rem;
  background-color: #ffd260;
  box-shadow: 0px 0px 15px 1px rgb(230, 230, 230);
`;

const BannerTitle = styled.div`
  padding-bottom: 1rem;
  color: #393632;
  font-weight: 900;
  font-size: 2.2rem;
`;

const BannerButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  border: 2px solid #9f7640;
  border-radius: 20rem;
  background-color: #ffeec3;
  color: #543915;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #9f7640;
  }
`;

const BannerText = styled.div`
  padding: 0.3rem 0;
  color: #4d3d01;
  font-weight: 600;
  font-size: 1.2rem;
`;

const ButtonBox = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1.3rem;
  border-radius: 1rem;
  border: none;
  background-color: white;
  box-shadow: 0px 0px 15px 1px rgb(230, 230, 230);

  &:hover {
    background-color: #fffadd;
  }
`;

const ButtonText = styled.div`
  color: black;
  font-weight: 700;
  font-size: 1.3rem;
`;

const ButtonIcon = styled.div`
  align-self: flex-end;
`;

export default LawServicePage;