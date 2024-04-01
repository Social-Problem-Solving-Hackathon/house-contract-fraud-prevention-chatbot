import { Avatar, Layout } from "antd";
import styled from "styled-components";
import MainHeader from "../../components/Common/MainHeader";
import MainMenu from "../../components/Common/MainMenu";
import CommentInput from "../../components/Post/CommentInput";
import { LikeOutlined, LikeTwoTone, UserOutlined } from "@ant-design/icons";
import PostImg from "../../assets/images/post-img.png";
import { useState } from "react";

const PostPage = () => {
  const [isLiked, setIsLiked] = useState(false);

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
          <ContentContainer>
            <PostContainer>
              <Title>Found a Hidden Gem Apartment! 🏠✨</Title>
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
                  Andrew
                  <br />
                  <Date>2023.03.03</Date>
                </div>
              </Writer>
              <Content>
                Hey friends! Guess what? I just found this incredible apartment
                that's a total steal, and I had to share with you all. It's a
                quaint one-bedroom spot in a quieter part of the city, but get
                this - it's got the most adorable little patio space. 🌿 <br />
                The best part? Rent is way below what I expected for the area. I
                was on the hunt for weeks and stumbled upon this listing by pure
                luck. 🍀
                <br /> For anyone else looking, my biggest tip is to check out
                lesser-known rental sites and don't be afraid to ask around.
                Sometimes, the best deals aren't the most advertised!
                <br /> Here's a peek at the patio - I'm already imagining
                morning coffees and evening reads here.
              </Content>
              <Img src={PostImg} />
              <Content>
                If you're in the market, keep your eyes peeled and your spirits
                high.
                <br /> Your perfect place could be just around the corner!
              </Content>
              <ContentBottom>
                {isLiked ? (
                  <LikeButton onClick={() => setIsLiked(false)}>
                    <LikeTwoTone twoToneColor={"red"} /> | 4
                  </LikeButton>
                ) : (
                  <LikeButton onClick={() => setIsLiked(true)}>
                    <LikeOutlined /> | 3
                  </LikeButton>
                )}
                <Explain>Likes 26 | Comments 3</Explain>
              </ContentBottom>
              <CommentContainer>
                <CommentBox>
                  <CommentWriter>PatioDreams</CommentWriter>
                  <CommentContent>
                    Love the patio vibes! 🌼 It looks so peaceful. Great find!
                  </CommentContent>
                  <CommentDate>2023.04.05</CommentDate>
                </CommentBox>
                <CommentBox>
                  <CommentWriter>BudgetHunter</CommentWriter>
                  <CommentContent>
                    Wow, that's amazing! Could you share which rental sites you
                    used? I'm on the hunt too and could use all the help I can
                    get.
                  </CommentContent>
                  <CommentDate>2023.04.06</CommentDate>
                </CommentBox>
                <CommentBox>
                  <CommentWriter>MorningBrewFan</CommentWriter>
                  <CommentContent>
                    That patio is perfect for a coffee lover. Congrats on
                    snagging such a great spot! Can't wait to see how you
                    decorate it.
                  </CommentContent>
                  <CommentDate>2023.05.10</CommentDate>
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

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 5rem;
  border: 1px solid gray;
  background-color: transparent;
  font-size: 1rem;
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
  padding: 1rem 2rem;
  width: inherit;
  border-radius: 1rem;
  border: 1px solid gray;
`;

const CommentWriter = styled.div`
  padding: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: green;
`;

const CommentContent = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: black;
`;

const CommentDate = styled.div`
  align-self: flex-end;
  //margin: 2rem 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: gray;
`;

const Img = styled.img`
  align-self: center;
  width: 30rem;
`;

export default PostPage;
