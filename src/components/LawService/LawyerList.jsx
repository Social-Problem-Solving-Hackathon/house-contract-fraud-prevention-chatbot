import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { useRef } from "react";
import styled from "styled-components";
import Lawyer from "./Lawyer";
import dummyData from "../../assets/json/lawyerListData.json";

const LawyerList = () => {
  const slider = useRef(null);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Title>원하는 변호사와 상담해보세요!</Title>
      <Container>
        <LeftButton onClick={() => slider.current.prev()}>
          <LeftOutlined style={{ fontSize: "1.5rem" }} />
        </LeftButton>
        <Carousel afterChange={onChange} ref={slider}>
          <div>
            <LawyerContainer>
              <Lawyer item={dummyData[0]} />
              <Lawyer item={dummyData[1]} />
              <Lawyer item={dummyData[2]} />
              <Lawyer item={dummyData[3]} />
            </LawyerContainer>
          </div>
          <div>
            <LawyerContainer>
              <Lawyer item={dummyData[4]} />
              <Lawyer item={dummyData[5]} />
              <Lawyer item={dummyData[6]} />
              <Lawyer item={dummyData[7]} />
            </LawyerContainer>
          </div>
        </Carousel>
        <RightButton onClick={() => slider.current.next()}>
          <RightOutlined style={{ fontSize: "1.5rem" }} />
        </RightButton>
      </Container>
    </>
  );
};

const Title = styled.div`
  padding: 1rem 3rem;
  width: 100%;
  color: black;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Container = styled.div`
  position: relative;
  // display: flex;
  //justify-content: space-between;
  margin: 1rem 3rem;
  max-width: 70rem;
  //overflow-y: hidden;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 6rem;
  left: -60px;
  background-color: transparent;
`;

const RightButton = styled.button`
  position: absolute;
  top: 6rem;
  right: -60px;
  background-color: transparent;
`;

const LawyerContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
`;

export default LawyerList;
