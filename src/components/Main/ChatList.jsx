import { Avatar } from "antd";
import styled from "styled-components";
import Logo from "../../assets/images/logo-color.svg";
import { useEffect, useRef } from "react";
import ResultChat from "./ResultChat";
import FinalResultChat from "./FinalResultChat";
import PayServiceChat from "./PayServiceChat";
import LinkChat from "./LinkChat";

const ChatList = ({ chatData }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  const decideBotChatContent = (item) => {
    if (item.id === 104) {
      return <LinkChat />;
    } else if (item.id === 105) {
      return <ResultChat />;
    } else if (item.id === 106) {
      return (
        <>
          <FinalResultChat />
          <PayServiceChat />
        </>
      );
    } else if (item.id === 109) {
      return (
        <>
          <BotChatText>
            <div>
              No, financial institutions cannot terminate a lease on behalf of a
              tenant.
            </div>
            <div
              style={{
                color: "#2194f3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Check legal basis.
            </div>
          </BotChatText>
        </>
      );
    } else {
      return item?.content.map((value, index) => (
        <BotChatText key={index}>{value}</BotChatText>
      ));
    }
  };

  return (
    <Container>
      {chatData.map((item) =>
        item?.isBot ? (
          <BotChatBox key={item.id}>
            <BotChatProfileBox>
              <BotChatImg src={<img src={Logo} alt="chatBot" />} />
              <BotChatProfileText>Jeonse Bot</BotChatProfileText>
            </BotChatProfileBox>
            <BotChatTextBox>
              {decideBotChatContent(item)}
              {/* {item?.content.map((value, index) => (
                <BotChatText key={index}>{value}</BotChatText>
              ))} */}
            </BotChatTextBox>
          </BotChatBox>
        ) : (
          <MyChatBox key={item.id}>
            <MyChatText>{item.content[0]}</MyChatText>
          </MyChatBox>
        )
      )}

      {/* <BotChatBox>
        <BotChatImg src={<img src={Logo} alt="chatBot" />} />
        <BotChatText>
          ㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱ
        </BotChatText>
      </BotChatBox>
      <MyChatBox>
        <MyChatText>
          ㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱ
        </MyChatText>
      </MyChatBox>
      <BotChatBox>
        <BotChatImg src={<img src={Logo} alt="chatBot" />} />
        <BotChatText>
          ㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱ
        </BotChatText>
      </BotChatBox>
      <MyChatBox>
        <MyChatText>
          ㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱㅇ니라댈ㄷㅎ궈륲ㄴ두팯갸호재ㅑ겨호ㅠ댜겋
          ㅣ자댜ㅜ래댜로갸허ㅠㄱ
        </MyChatText>
      </MyChatBox> */}
      <div ref={chatEndRef}></div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 4rem 5rem 4rem;
  width: inherit;
  overflow-y: scroll;
`;

const BotChatBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const BotChatProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotChatImg = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  border: 2px solid #1b5e1f;
  box-shadow: 0px 0px 5px 1px rgb(195, 195, 195);
`;

const BotChatProfileText = styled.div`
  color: #1b5e1f;
  font-size: 0.9rem;
  font-weight: 700;
`;

const BotChatTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
`;

const BotChatText = styled.div`
  max-width: 50dvw;
  padding: 1.3rem;
  border-radius: 20px 20px 20px 0;
  background-color: #1b5e1f;
  font-size: 1.1rem;
  color: white;
  box-shadow: 0px 0px 10px 1px rgb(195, 195, 195);
`;

const MyChatBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const MyChatText = styled.div`
  max-width: 50dvw;
  padding: 1.3rem;
  border-radius: 20px 20px 0 20px;
  background-color: #c8e6c9;
  font-size: 1.1rem;
  color: black;
  box-shadow: 0px 0px 10px 1px rgb(195, 195, 195);
`;

export default ChatList;
