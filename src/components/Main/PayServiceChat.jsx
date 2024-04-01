import styled from "styled-components";

const PayServiceChat = () => {
  return (
    <ChatBox>
      <div>
        To ensure a more accurate assessment of Jeonse fraud risks, you can pay
        5,000 won and receive document review directly from a certified real
        estate agent. Would you like to use this paid service?
      </div>
      <PayButtonBox>
        <PayButton>Yes</PayButton>
        <PayButton>No</PayButton>
      </PayButtonBox>
    </ChatBox>
  );
};

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30dvw;
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 20px 20px 20px 0;
  background-color: white;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: black;
  box-shadow: 0px 0px 10px 1px rgb(195, 195, 195);
`;

const PayButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 2rem;
  width: inherit;
`;

const PayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1.5rem 1rem;
  border-radius: 20px;
  background-color: #fbc02d;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #e5ac1b;
  }
`;

export default PayServiceChat;
