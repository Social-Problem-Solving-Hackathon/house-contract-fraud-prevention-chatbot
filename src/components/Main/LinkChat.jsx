import { FileTextOutlined } from "@ant-design/icons";
import styled from "styled-components";

const LinkChat = () => {
  return (
    <ChatBox>
      <div>
        <FileTextOutlined style={{ paddingRight: "1rem" }} />
        Document Verification
      </div>
      <div>
        Please go to the link provided below and download the documents in PDF
        format for assessment to determine if there is a risk of a housing lease
        fraud:
      </div>
      <PayButtonBox>
        <PayButton
          onClick={() =>
            window.open(
              "http://www.iros.go.kr//pos1/jsp/help2/jsp/001002004001.jsp"
            )
          }
        >
          <ButtonTitle>Certificate of Real Estate Registration</ButtonTitle>
          <ButtonContent>
            Assessing the presence of abandoned buildings
          </ButtonContent>
        </PayButton>
        <PayButton
          onClick={() =>
            window.open(
              "https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=&CappBizCD=15000000098"
            )
          }
        >
          <ButtonTitle> Building Register</ButtonTitle>
          <ButtonContent>
            Determining the status of violations in the building
          </ButtonContent>
        </PayButton>
      </PayButtonBox>
      <PayButtonBox>
        <PayButton
          onClick={() =>
            window.open(
              "https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=&tm2lIdx=&tm3lIdx="
            )
          }
        >
          <ButtonTitle>Certificate of Tax Payment</ButtonTitle>
          <ButtonContent>
            Assessing whether the lessor has any outstanding national tax
            payments
          </ButtonContent>
        </PayButton>
        <PayButton
          onClick={() =>
            window.open(
              "https://www.gov.kr/mw/AA020InfoCappView.do?HighCtgCD=A09002&CappBizCD=13100000056&tp_seq=01"
            )
          }
        >
          <ButtonTitle>Certificate of Local Tax Payment</ButtonTitle>
          <ButtonContent>
            Assessing whether the lessor has any outstanding local tax payments
          </ButtonContent>
        </PayButton>
      </PayButtonBox>
      <div style={{ paddingTop: "1rem" }}>
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
  line-height: 2rem;
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
  justify-content: start;
  align-items: center;
  flex: 1;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const ButtonTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
  color: #1b5e1f;
`;

const ButtonContent = styled.div`
  font-weight: 500;
  color: black;
`;

export default LinkChat;
