import { Avatar } from "antd";
import styled from "styled-components";

const Lawyer = () => {
  return (
    <Container>
      <Avatar
        src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
        style={{ border: "1px solid black", width: "4rem", height: "4rem" }}
      />
      <ContentBox>
        <Name>000 변호사</Name>
        <Explain>000 법률 사무소</Explain>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: white;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  margin-bottom: 0.2rem;
  color: black;
  font-weight: 700;
  font-size: 1rem;
`;

const Explain = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 0.8rem;
`;

export default Lawyer;
