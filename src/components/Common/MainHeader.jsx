import {
  BellOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Popover } from "antd";
import { useState } from "react";
import styled from "styled-components";
import Notifications from "./Notifications";

const MainHeader = () => {
  const [show, setShow] = useState(true);

  const content = <Notifications />;

  return (
    <Container>
      <ButtonContainer>
        <Avatar
          style={{
            backgroundColor: "white",
            fontSize: "2.1rem",
            width: "2.1rem",
            height: "2.1rem",
          }}
          icon={<QuestionCircleOutlined style={{ color: "#aab4be" }} />}
        />
        <Popover
          placement="bottomRight"
          content={content}
          title="Notifications"
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

export default MainHeader;
