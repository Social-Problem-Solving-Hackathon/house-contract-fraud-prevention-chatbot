import { Layout } from "antd";
import styled from "styled-components";
import ChatList from "../../components/Main/ChatList";
import MainHeader from "../../components/Common/MainHeader";
import ChatInput from "../../components/Main/ChatInput";
import MainMenu from "../../components/Common/MainMenu";
import { useState } from "react";

const initialData = [
  {
    id: 1,
    isBot: true,
    content: [
      "Hello, I'm SafetyJeonseBot!",
      "I will guide you through the entire process and help assess the risk of a Jeonse fraud together. Let's start by confirming if the information on the documents matches what you already know. Please provide the actual address of the property you intend to lease.",
    ],
  },
];

const answerData = [
  {
    answer: ["Please provide the name of the homeowner."],
  },
  {
    answer: [
      "Please provide the resident registration number of the homeowner.",
    ],
  },
  {
    answer: ["Please provide the residential address of the homeowner."],
  },
  {
    answer: [
      `Document Verification`,
      `Please go to the link provided below and download the documents in PDF format for assessment to determine if there is a risk of a housing lease fraud: 
      - Certificate of Real Estate Registration: Assessing the presence of abandoned buildings
      - Building Register: Determining the status of violations in the building
      - Certificate of Tax Payment: Assessing whether the lessor has any outstanding national tax payments
      - Certificate of Local Tax Payment: Assessing whether the lessor has any outstanding local tax payments
      `,
      `Please ensure all documents are provided for thorough evaluation.`,
    ],
  },
  {
    // 근데 이거는 디자인 다르게 하자! 아예 컴포넌트를 반환할까?
    answer: [
      `I have reviewed the document ‘Certificate of Real Estate Registration’. `,
      `Here are the findings:

      Check-point 01:
      The address of the building matches the address listed on the certificate of real estate registration. This is a positive result as discrepancies could indicate potential issues.
      `,
      `Check-point 02:
      The purpose of the building has been assessed, and it has been determined that it is not designated for residential use such as 'house', 'apartment', or 'Officetel'. This may pose challenges in obtaining Jeonse loans, as they are typically intended for residential properties.
      `,
      `Check-point 03:
      The presence of the term 'land ownership' has been verified in the document. It indicates either 'unregistered land ownership' or 'no land ownership.' This situation could lead to a decline in property value and the risk of eviction claims from the landowner.
      `,
      `These findings suggest potential risks associated with the property. Further investigation or clarification may be necessary before proceeding with any transactions or agreements. Let me know if you need any further assistance.`,
    ],
  },
  {
    answer: [
      "Types of Jeonse fraud include cases where a representative engages in dual contracts or where a single house is contracted with multiple tenants.",
    ],
  },
  {
    answer: [
      `I have reviewed the document ‘Certificate of Tax Payment’.`,
      `This step is to verify if the homeowner has any outstanding national tax payments.
      If the homeowner is in arrears with national taxes, the property may be seized by the National Tax Service, which directly impacts the return of the Jeonse deposit. 
      In case of auction, the unpaid taxes will be settled first, pushing back the priority of the tenant's Jeonse deposit refund.
      It has been determined that there are no records of the homeowner's tax arrears.
      Based on the review of the Certificate of Tax Payment, no signs of Jeonse fraud have been detected.
      `,
      `All document reviews have been completed.`,
      `Out of the 4 documents reviewed, Jeonse fraud risks were detected in the ‘Certificate of Real Estate Registration’ and ‘Building Register’.
      For a safe Jeonse contract, we recommend directly verifying these documents.
      To ensure a more accurate assessment of Jeonse fraud risks, you can pay 5,000 won and receive document review directly from a certified real estate agent.
      Would you like to use this paid service?
      `,
    ],
  },
  {
    answer: [
      `The ratio of the gross floor area of a building (the total floor area, including upper floors, if any) to the land area is referred to as the "Floor Area Ratio (FAR).`,
    ],
  },
  {
    answer: [
      `No, financial institutions cannot terminate a lease on behalf of a tenant. 
      Check legal basis.
      `,
    ],
  },
];

const MainPage = () => {
  const [chatData, setChatData] = useState(initialData);
  const [step, setStep] = useState(1);

  const onSubmit = (text) => {
    if (text == "") {
      alert("Please write correctly..");
      return;
    }
    console.log("text:", text);
    let chat = {
      id: chatData.length + 1,
      isBot: false,
      content: [text],
    };
    setChatData((prev) => [...prev, chat]);
    // 추가해
    let Answer = {
      id: chatData.length + 1,
      isBot: true,
      content: answerData[step - 1].answer,
    };
    setChatData((prev) => [...prev, Answer]);
    setStep(step + 1);
  };

  return (
    <>
      <LayoutStyled
        style={{
          minWidth: "100dvw",
          minHeight: "100dvh",
          overflowY: "hidden",
        }}
      >
        <MainMenu selectedKey={"1"} />
        <Container>
          <MainHeader />
          <ChatList chatData={chatData} />
          <ChatInput onSubmit={onSubmit} />
        </Container>
      </LayoutStyled>
    </>
  );
};

const LayoutStyled = styled(Layout)`
  .ant-layout-sider {
    background-color: white;
  }

  .ant-menu-light.ant-menu-root.ant-menu-inline {
    background-color: transparent;
    border-inline-end: none;
  }

  .ant-menu-light .ant-menu-item-selected {
    //background-color: #d5f2bb;
  }

  .ant-layout-sider-trigger {
    background-color: #eee;
    svg {
      fill: black;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;

export default MainPage;
