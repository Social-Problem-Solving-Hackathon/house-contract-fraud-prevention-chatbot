import { Avatar, Layout } from "antd";
import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import MainMenu from "../../components/Common/MainMenu";
import CommentInput from "../../components/Post/CommentInput";
import { UserOutlined } from "@ant-design/icons";

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
          <ContentContainer>
            <PostContainer>
              <Title>제목네ㅑ러ㅐㄱ햊댜러ㅐㄷ쟈루ㅐ쟈ㅜㅐㅈ갸러ㅐㅈ댜러</Title>
              <Writer>
                <Avatar
                  style={{
                    backgroundColor: "#97c982",
                    fontSize: "1.7rem",
                    width: "2.5rem",
                    height: "2.5rem",
                  }}
                  icon={<UserOutlined />}
                />
                <div>
                  000 작성자
                  <br />
                  <Date>2023.03.03</Date>
                </div>
              </Writer>
              <Content>
                foweifhorigjpwiofpwoefkmsdkn
                vefogrrnoignwfmwpenknforgiowrinwpefmpeo 종일 바쁜 일상에서
                우리는 종종 내면의 평화와 안정을 잃어버리곤 합니다. 하지만
                다행스럽게도 명상은 이러한 혼란된 마음을 진정시키고 안도를 찾을
                수 있는 강력한 도구입니다. 바쁜 스케줄 사이에서 조금의 시간을
                내어 명상을 실천함으로써 우리는 내면의 조용함과 안정을 되찾을 수
                있습니다. 이 글에서는 바쁜 삶 속에서도 실천할 수 있는 몇 가지
                간단한 명상 기법을 소개하고, 그 효과에 대해 살펴보겠습니다. 함께
                명상을 통해 내면의 평화를 찾아봅시다.
              </Content>
              <Explain>조회수 26 | 좋아요 1 | 댓글 3</Explain>
              <CommentContainer>
                <CommentBox>
                  <CommentWriter>000 작성자</CommentWriter>
                  <CommentContent>
                    {" "}
                    바쁜 스케줄 사이에서 조금의 시간을 내어 명상을 실천함으로써
                    우리는 내면의 조용함과 안정을 되찾을 수 있습니다. 이
                    글에서는 바쁜 삶 속에서도 실천할 수 있는 몇 가지 간단한 명상
                    기법을 소개하고,
                  </CommentContent>
                </CommentBox>
                <CommentBox>
                  <CommentWriter>000 작성자</CommentWriter>
                  <CommentContent>
                    {" "}
                    바쁜 스케줄 사이에서 조금의 시간을 내어 명상을 실천함으로써
                    우리는 내면의 조용함과 안정을 되찾을 수 있습니다. 이
                    글에서는 바쁜 삶 속에서도 실천할 수 있는 몇 가지 간단한 명상
                    기법을 소개하고,
                  </CommentContent>
                </CommentBox>
              </CommentContainer>
            </PostContainer>
          </ContentContainer>
          <CommentInput />
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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0px 0px 15px 1px rgb(230, 230, 230);
`;

const Title = styled.div`
  padding: 1rem 0;
  font-weight: 700;
  font-size: 1.7rem;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1rem;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 0.9rem;
  font-size: 400;
  color: gray;
`;

const Content = styled.div`
  margin: 2rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
`;

const Explain = styled.div`
  align-self: flex-end;
  margin: 2rem 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: gray;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: inherit;
  padding: 2rem 0;
  border-top: 1px solid gray;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  width: inherit;
  border-radius: 1rem;
  border: 1px solid gray;
`;

const CommentWriter = styled.div`
  padding-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: green;
`;

const CommentContent = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: black;
`;

export default PostPage;
