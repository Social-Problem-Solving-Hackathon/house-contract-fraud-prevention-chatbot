import { Avatar } from "antd";
import styled from "styled-components";
import Logo from "../../assets/images/logo-color.svg";

const ChatList = () => {
  return (
    <Container>
      <div style={{ height: "200%" }}></div>
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
      </MyChatBox>
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

const BotChatImg = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  border: 2px solid #1b5e1f;
  box-shadow: 0px 0px 5px 1px rgb(195, 195, 195);
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
