import { LinkOutlined, SendOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import reactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

const ChatInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [file, setFile] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const UploadFile = (e) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setFile(file.name);
      console.log(file.name);
      // 파일 이름 첨부
      setValue(`"${file.name}" upload`);
    }
    setIsModalOpen(false);
  };

  const onClickSendButton = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <Container>
        <InputBox>
          <UploadStyled>
            <LinkOutlined style={{ fontSize: "1.5rem" }} onClick={showModal} />
          </UploadStyled>
          {/* <UploadStyled htmlFor="file">
            <LinkOutlined style={{ fontSize: "1.5rem" }} />
          </UploadStyled>
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => UploadFile(e)}
          /> */}
          <Input
            placeholder="무엇이든 물어보세요"
            cacheMeasurements
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </InputBox>
        <Button onClick={() => onClickSendButton()}>
          <SendOutlined />
        </Button>
      </Container>
      <Modal
        title="Send Documents"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <input
          type="file"
          name="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => UploadFile(e)}
        />
        <PayButtonBox>
          <PayButton htmlFor="file">
            <ButtonTitle>Certificate of Real Estate Registration</ButtonTitle>
            <ButtonContent>
              Assessing the presence of abandoned buildings
            </ButtonContent>
          </PayButton>
          <PayButton htmlFor="file">
            <ButtonTitle> Building Register</ButtonTitle>
            <ButtonContent>
              Determining the status of violations in the building
            </ButtonContent>
          </PayButton>
        </PayButtonBox>
        <PayButtonBox>
          <PayButton htmlFor="file">
            <ButtonTitle>Certificate of Tax Payment</ButtonTitle>
            <ButtonContent>
              Assessing whether the lessor has any outstanding national tax
              payments
            </ButtonContent>
          </PayButton>
          <PayButton htmlFor="file">
            <ButtonTitle>Certificate of Local Tax Payment</ButtonTitle>
            <ButtonContent>
              Assessing whether the lessor has any outstanding local tax
              payments
            </ButtonContent>
          </PayButton>
        </PayButtonBox>
      </Modal>
    </>
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

const PayButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  width: inherit;
`;

const PayButton = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: #eee;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #d2dece;
  }
`;

const ButtonTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
  color: #1b5e1f;
`;

const ButtonContent = styled.div`
  font-weight: 500;
  color: black;
`;

export default ChatInput;
