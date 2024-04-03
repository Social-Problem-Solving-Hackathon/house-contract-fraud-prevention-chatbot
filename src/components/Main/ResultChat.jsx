import { CheckSquareOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ResultChat = () => {
  return (
    <ChatBox>
      <Title>
        I have reviewed the document ‘Certificate of Real Estate Registration’.
      </Title>
      <div>
        As a result of the review, the risk of Jeonse fraud was detected in three items.
        Please review the following details.
      </div>
      <StepTitle>
        <CheckSquareOutlined />
        Check-point 01:
      </StepTitle>
      <div>
        This item involves verifying if the address of the building matches the address written in the Certificate of Real Estate Registration.
        If the actual address of the building differs from the one recorded in the Certificate of Real Estate Registration, it could be problematic.
        The address of the building matches the address listed on the
        certificate of real estate registration. This is a positive result as
        discrepancies could indicate potential issues.
      </div>
      <StepTitle>
        <CheckSquareOutlined />
        Check-point 02:
      </StepTitle>
      <div>
        This is an item for confirming the purpose of the building. 
        If the building is not intended for residential use, it may be difficult to obtain a lease deposit loan.
        The purpose of the building has been assessed, and it has been
        determined that it is not designated for residential use such as
        &apos;house&apos;, &apos;apartment&apos;, or &apos;Officetel&apos;. This
        may pose challenges in obtaining Jeonse loans, as they are typically
        intended for residential properties.
      </div>
      <StepTitle>
        <CheckSquareOutlined />
        Check-point 03:
      </StepTitle>
      <div>
        This is an item to verify the presence of &apos;land ownership&apos;.
        The land ownership of a collective building should be registered as a principle.
        The presence of the term &apos;land ownership&apos; has been verified in
        the document. It indicates either &apos;unregistered land
        ownership&apos; or &apos;no land ownership.&apos; This situation could
        lead to a decline in property value and the risk of eviction claims from
        the landowner.
      </div>
      <Title>
        These findings suggest potential risks associated with the property.
        Further investigation or clarification may be necessary before
        proceeding with any transactions or agreements. Let me know if you need
        any further assistance.
      </Title>
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
  padding: 0.5rem 0;
  font-weight: 700;
  color: #1b5e1f;
`;

const StepTitle = styled.div`
  padding: 1rem 0;
  font-weight: 700;
  color: #2194f3;
`;
export default ResultChat;
