import { useState } from "react";
import styled from "styled-components";
import totalData from "../../assets/json/Notifications/notificationData.json";
import paymentData from "../../assets/json/Notifications/paymentData.json";
import revisedLawData from "../../assets/json/Notifications/revisedLawData.json";
import communityData from "../../assets/json/Notifications/communityData.json";

const Notifications = () => {
  const [alertType, setAlertType] = useState(0);
  const [alertData, setAlertData] = useState(totalData);

  const onClickMenu = (menu) => {
    setAlertType(menu);
    setAlertData(selectedData(menu));
  };

  const selectedData = (menu) => {
    if (menu === 0) {
      return totalData;
    } else if (menu === 1) {
      return paymentData;
    } else if (menu === 2) {
      return revisedLawData;
    } else if (menu === 3) {
      return communityData;
    }
  };
  return (
    <AlertContainter>
      <AlertTabContainer>
        <AlertTabButton
          onClick={() => onClickMenu(0)}
          className={alertType === 0 && "alertSelected"}
        >
          Total
        </AlertTabButton>
        <AlertTabButton
          onClick={() => onClickMenu(1)}
          className={alertType === 1 && "alertSelected"}
        >
          Payments
        </AlertTabButton>
        <AlertTabButton
          onClick={() => onClickMenu(2)}
          className={alertType === 2 && "alertSelected"}
        >
          Revised Laws
        </AlertTabButton>
        <AlertTabButton
          onClick={() => onClickMenu(3)}
          className={alertType === 3 && "alertSelected"}
        >
          Community
        </AlertTabButton>
      </AlertTabContainer>
      <AlertContentBox>
        {alertData &&
          alertData.map((item, index) => (
            <AlertContent key={index}>
              <AlertTitle>
                {item.title}
                <AlertDate>{item.data}</AlertDate>
              </AlertTitle>
              <AlertText>{item.content}</AlertText>
            </AlertContent>
          ))}
      </AlertContentBox>
    </AlertContainter>
  );
};

const AlertContainter = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
  width: 30rem;
  max-height: 60dvh;
  overflow-y: scroll;
  color: black;
`;

const AlertTabContainer = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;

  .alertSelected {
    color: white;
    background-color: #2194f3;
    border-color: white;
  }
`;

const AlertTabButton = styled.button`
  border: 1px solid black;
  border-radius: 10rem;
  background-color: white;
`;

const AlertContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
  width: 100%;
  border-radius: 0.5rem;
  // background-color: #c6c6c6;
`;

const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f5f7fa;
`;

const AlertTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: black;
`;

const AlertDate = styled.span`
  margin-left: 1rem;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 400;
  color: gray;
`;

const AlertText = styled.div``;

export default Notifications;
