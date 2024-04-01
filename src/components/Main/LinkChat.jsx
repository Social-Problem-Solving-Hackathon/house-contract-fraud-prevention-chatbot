import styled from "styled-components";

const LinkChat = () => {
  return (
    <ChatBox>
      <div>Document Verification</div>
      <div>
        Please go to the link provided below and download the documents in PDF
        format for assessment to determine if there is a risk of a housing lease
        fraud:
      </div>
      <PayButtonBox>
        <PayButton>
          <ButtonTitle>Certificate of Real Estate Registration</ButtonTitle>
          <ButtonContent>
            Assessing the presence of abandoned buildings
          </ButtonContent>
        </PayButton>
        <PayButton>
          <ButtonTitle> Building Register</ButtonTitle>
          <ButtonContent>
            Determining the status of violations in the building
          </ButtonContent>
        </PayButton>
      </PayButtonBox>
      <PayButtonBox>
        <PayButton>
          <ButtonTitle>Certificate of Tax Payment</ButtonTitle>
          <ButtonContent>
            Assessing whether the lessor has any outstanding national tax
            payments
          </ButtonContent>
        </PayButton>
        <PayButton>
          <ButtonTitle>Certificate of Local Tax Payment</ButtonTitle>
          <ButtonContent>
            Assessing whether the lessor has any outstanding local tax payments
          </ButtonContent>
        </PayButton>
      </PayButtonBox>
      <div>
        Please ensure all documents are provided for through evaluation.
      </div>
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
  background-color: #388e3b;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: white;
  box-shadow: 0px 0px 10px 1px rgb(195, 195, 195);
`;

const PayButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  width: inherit;
`;

const PayButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1.5rem 1rem;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const ButtonTitle = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #1b5e1f;
`;

const ButtonContent = styled.div`
  font-weight: 500;
  color: black;
`;

export default LinkChat;
