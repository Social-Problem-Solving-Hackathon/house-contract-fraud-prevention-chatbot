/* eslint-disable react/prop-types */
import { Avatar } from "antd";
import styled from "styled-components";

const Lawyer = ({ item }) => {
  return (
    <Container>
      <Avatar
        src={item.profile}
        style={{ border: "1px solid black", width: "4rem", height: "4rem" }}
      />
      <ContentBox>
        <Name>{item.name}</Name>
        <Explain>{item.company}</Explain>
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
