import { SendOutlined } from "@ant-design/icons";
import reactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

const CommentInput = () => {
  return (
    <Container>
      <InputBox>
        <Input placeholder="댓글을 작성해주세요" cacheMeasurements />
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
  gap: 1rem;
  width: inherit;
  padding: 2rem;
  padding-top: 0;
  background-color: transparent;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled(reactTextareaAutosize)`
  //margin: 0.5rem;
  padding: 1rem;
  padding-left: 3rem;
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

const Button = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  background-color: #66bb69;
  border-radius: 50%;
  border: 1px solid #66bb69;

  &:hover {
    background-color: #43a046;
  }
`;

export default CommentInput;
