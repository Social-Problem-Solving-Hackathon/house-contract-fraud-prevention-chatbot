import styled from "styled-components";

const ResultChat = () => {
  return (
    <ChatBox>
      <Title>
        I have reviewed the document ‘Certificate of Real Estate Registration’.
      </Title>
      <div>Here are the findings:</div>
      <StepTitle>Check-point 01:</StepTitle>
      <div>
        The address of the building matches the address listed on the
        certificate of real estate registration. This is a positive result as
        discrepancies could indicate potential issues.
      </div>
      <StepTitle>Check-point 02:</StepTitle>
      <div>
        The purpose of the building has been assessed, and it has been
        determined that it is not designated for residential use such as
        &apos;house&apos;, &apos;apartment&apos;, or &apos;Officetel&apos;. This
        may pose challenges in obtaining Jeonse loans, as they are typically
        intended for residential properties.
      </div>
      <StepTitle>Check-point 03:</StepTitle>
      <div>
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
