import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Popover } from "antd";
import { useState } from "react";
import styled from "styled-components";

const MainHeader = () => {
  const [show, setShow] = useState(true);
  const [alertType, setAlertType] = useState(0);

  const content = (
    <AlertContainter>
      <AlertTabContainer>
        <AlertTabButton
          onClick={() => setAlertType(0)}
          className={alertType === 0 && "alertSelected"}
        >
          전체
        </AlertTabButton>
        <AlertTabButton
          onClick={() => setAlertType(1)}
          className={alertType === 1 && "alertSelected"}
        >
          결제
        </AlertTabButton>
        <AlertTabButton
          onClick={() => setAlertType(2)}
          className={alertType === 2 && "alertSelected"}
        >
          개정 법률
        </AlertTabButton>
      </AlertTabContainer>
      <AlertContentBox>
        <AlertContent>
          <AlertTitle>
            제목~~~~~<AlertDate>2024.01.01</AlertDate>
          </AlertTitle>
          <AlertText>
            내용인델겨ㅙㅑ푸ㅐㅇ러퓨ㅐㅈ댜로갿휴ㅗ
            ㅣㄴ우챈랴ㅠㄱ쟈ㅕ햊ㄷ루ㅐㅓㅠ
          </AlertText>
        </AlertContent>
        <AlertContent>
          <AlertTitle>
            제목~~~~~<AlertDate>2024.01.01</AlertDate>
          </AlertTitle>
          <AlertText>
            내용인델겨ㅙㅑ푸ㅐㅇ러퓨ㅐㅈ댜로갿휴ㅗ
            ㅣㄴ우챈랴ㅠㄱ쟈ㅕ햊ㄷ루ㅐㅓㅠ
          </AlertText>
        </AlertContent>
        <AlertContent>
          <AlertTitle>
            제목~~~~~<AlertDate>2024.01.01</AlertDate>
          </AlertTitle>
          <AlertText>
            내용인델겨ㅙㅑ푸ㅐㅇ러퓨ㅐㅈ댜로갿휴ㅗ
            ㅣㄴ우챈랴ㅠㄱ쟈ㅕ햊ㄷ루ㅐㅓㅠ
          </AlertText>
        </AlertContent>
        <AlertContent>
          <AlertTitle>
            제목~~~~~<AlertDate>2024.01.01</AlertDate>
          </AlertTitle>
          <AlertText>
            내용인델겨ㅙㅑ푸ㅐㅇ러퓨ㅐㅈ댜로갿휴ㅗ
            ㅣㄴ우챈랴ㅠㄱ쟈ㅕ햊ㄷ루ㅐㅓㅠ
          </AlertText>
        </AlertContent>
        <AlertContent>
          <AlertTitle>
            제목~~~~~<AlertDate>2024.01.01</AlertDate>
          </AlertTitle>
          <AlertText>
            내용인델겨ㅙㅑ푸ㅐㅇ러퓨ㅐㅈ댜로갿휴ㅗ
            ㅣㄴ우챈랴ㅠㄱ쟈ㅕ햊ㄷ루ㅐㅓㅠ
          </AlertText>
        </AlertContent>
        <AlertContent>
          <AlertTitle>
            제목~~~~~<AlertDate>2024.01.01</AlertDate>
          </AlertTitle>
          <AlertText>
            내용인델겨ㅙㅑ푸ㅐㅇ러퓨ㅐㅈ댜로갿휴ㅗ
            ㅣㄴ우챈랴ㅠㄱ쟈ㅕ햊ㄷ루ㅐㅓㅠ
          </AlertText>
        </AlertContent>
      </AlertContentBox>
    </AlertContainter>
  );

  return (
    <Container>
      <ButtonContainer>
        <Popover
          placement="bottomRight"
          content={content}
          title="알림창"
          style={{ verticalAlign: "center" }}
        >
          <Badge dot={show}>
            <Avatar
              icon={
                <BellOutlined
                  style={{ fontSize: "1.7rem", color: "#aab4be" }}
                />
              }
              style={{
                backgroundColor: "#E8F5E9",
                width: "2.5rem",
                height: "2.5rem",
                cursor: "pointer",
              }}
            />
          </Badge>
        </Popover>
        <Avatar
          style={{
            backgroundColor: "#aab4be",
            fontSize: "1.7rem",
            width: "2.5rem",
            height: "2.5rem",
          }}
          icon={<UserOutlined />}
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 40px;
  width: inherit;
  height: 4.5rem;
  background: white;
  border: 2px solid #eee;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  //color: white;
`;

const AlertContainter = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
  width: 26rem;
  max-height: 40dvw;
  overflow-y: scroll;
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
  font-weight: 400;
  color: gray;
`;

const AlertText = styled.div``;

export default MainHeader;
