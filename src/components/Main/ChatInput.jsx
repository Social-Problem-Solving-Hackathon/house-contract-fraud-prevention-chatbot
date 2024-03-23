import { LinkOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";

const ChatInput = () => {
  const [file, setFile] = useState();

  const UploadFile = (e) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setFile(file.name);
      console.log(file.name);
    }
  };

  return (
    <Container>
      <InputBox>
        <UploadStyled htmlFor="file">
          <LinkOutlined style={{ fontSize: "1.5rem" }} />
        </UploadStyled>
        <input
          type="file"
          name="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => UploadFile(e)}
        />
        <Input placeholder="무엇이든 물어보세요" />
      </InputBox>
      <Button>
        <SendOutlined />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  width: inherit;
  padding: 2rem;
  padding-top: 0;
  background-color: transparent;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.textarea`
  //margin: 0.5rem;
  padding: 1rem;
  padding-left: 4rem;
  width: 50dvw;
  height: 3.2rem;
  font-size: 1.1rem;
  background-color: white;
  border-radius: 6rem;
  border: 1px solid #89939e;
  resize: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const UploadStyled = styled.label`
  position: absolute;
  top: 0.8rem;
  left: 1.7rem;
`;

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  color: white;
  background-color: #66bb69;
  border-radius: 50%;
  border: 1px solid #66bb69;

  &:hover {
    background-color: #43a046;
  }
`;

export default ChatInput;
