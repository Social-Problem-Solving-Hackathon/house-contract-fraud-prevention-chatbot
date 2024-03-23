import styled from "styled-components";
import Logo from "../../assets/images/logo-color.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/main");
  };

  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <Title>Welcome</Title>
          <InputTitle>email</InputTitle>
          <Input />
          <InputTitle>password</InputTitle>
          <Input type="password" />
          <Button onClick={() => goToMainPage()}>Login</Button>
        </InputContainer>
        <ExplainContainer>
          <LogoContainer>
            <Img src={Logo} />
            <LogoText>안심 전세봇</LogoText>
          </LogoContainer>
          <Explain>
            One-stop jeonse fraud prevention service that solves from document
            review to Q&A
          </Explain>
        </ExplainContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  width: 100dvw;
  height: 100dvh;
`;

const InnerContainer = styled.div`
  display: flex;
  //flex-direction: column;
  //align-items: center;
  width: 60rem;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 1px rgb(223, 223, 223);
  background-color: white;
`;

const InputContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
  //background-color: red;
`;

const ExplainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 4rem;
  border-radius: 0 30px 30px 0;
  background-color: #66bb69;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 10rem;
`;

const LogoText = styled.div`
  //margin: 1rem 0;
  font-size: 2.5rem;
  font-weight: 900;
  color: #103e13;
`;

const Explain = styled.div`
  margin-top: 0.5rem;
  width: 17rem;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 2rem;
  color: #ffffff;
`;

const Title = styled.div`
  margin: 1rem 0;
  font-size: 2.5rem;
  font-weight: 900;
  color: #4caf4f;
`;

const InputTitle = styled.div`
  margin-left: 0.5rem;
  width: 100%;
  color: #939393;
`;

const Input = styled.input`
  margin: 0.5rem;
  padding: 1rem;
  width: 100%;
  background-color: #ececec;
  border-radius: 10px;
  border: 1px solid #ececec;
`;

const Button = styled.div`
  margin: 1rem 0.5rem;
  margin-top: 2rem;
  padding: 0.7rem 0.5rem;
  width: 100%;
  background-color: #4caf4f;
  border-radius: 10px;
  border: 1px solid #4caf4f;
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;

  &:hover {
    background-color: #43a046;
  }
`;

export default LoginPage;
