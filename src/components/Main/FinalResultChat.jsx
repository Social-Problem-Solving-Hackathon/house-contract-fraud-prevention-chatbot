import styled from "styled-components";

const FinalResultChat = () => {
  return (
    <ChatBox>
      <Title>I have reviewed the document ‘Certificate of Tax Payment’.</Title>
      <div>
        This step is to verify if the homeowner has any outstanding national tax
        payments. If the homeowner is in arrears with national taxes, the
        property may be seized by the National Tax Service, which directly
        impacts the return of the Jeonse deposit. In case of auction, the unpaid
        taxes will be settled first, pushing back the priority of the
        tenant&apos;s Jeonse deposit refund. It has been determined that there
        are no records of the homeowner&apos;s tax arrears. Based on the review
        of the Certificate of Tax Payment, no signs of Jeonse fraud have been
        detected.
      </div>
      <Title>All document reviews have been completed.</Title>
      <div>
        Out of the 4 documents reviewed, Jeonse fraud risks were detected in the
        ‘Certificate of Real Estate Registration’ and ‘Building Register’. For a
        safe Jeonse contract, we recommend directly verifying these documents.
      </div>
    </ChatBox>
  );
};

const ChatBox = styled.div`
  max-width: 50dvw;
  padding: 1.3rem;
  border-radius: 20px 20px 20px 0;
  background-color: white;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: black;
  box-shadow: 0px 0px 10px 1px rgb(195, 195, 195);
`;

const Title = styled.div`
  padding: 1rem 0;
  font-weight: 700;
  color: #1b5e1f;
`;

export default FinalResultChat;
