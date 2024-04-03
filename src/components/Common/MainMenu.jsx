import { Input, Layout, Menu } from "antd";
import {
  CommentOutlined,
  ContactsOutlined,
  HistoryOutlined,
  PlusOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Logo from "../../assets/images/logo-color.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Document Review Chatbot", "1", <CommentOutlined />),
  getItem("History", "sub2", <HistoryOutlined />, [
    getItem("2024.03.30", "5"),
    getItem("2024.03.29", "6"),
    getItem("2024.03.28", "7"),
    getItem("2024.03.27", "8"),
  ]),
  getItem("Legal mediation service", "2", <ContactsOutlined />),
  getItem("Community", "3", <TeamOutlined />),
];

const MainMenu = ({ selectedKey }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const onClickMenu = (key) => {
    if (key === "1") {
      navigate("/main");
    } else if (key === "2") {
      navigate("/lawservice");
    } else if (key === "3") {
      navigate("/community");
    } else {
      navigate("/main");
    }
  };

  return (
    <SiderStyled
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={"20rem"}
    >
      <div className="demo-logo-vertical">
        {!collapsed ? (
          <LogoUnCollapsed>
            <LogoContainer>
              <Img src={Logo} />
              <LogoText>Safety Jeonse Bot</LogoText>
            </LogoContainer>
          </LogoUnCollapsed>
        ) : (
          <LogoCollapsed>
            <Img src={Logo} />
          </LogoCollapsed>
        )}
      </div>
      <div className="demo-logo-vertical">
        {!collapsed ? (
          <InputStyled
            size="large"
            placeholder="Start a new chat"
            prefix={<PlusOutlined />}
          />
        ) : (
          <InputCollapsedStyled
            size="large"
            prefix={<PlusOutlined />}
            readOnly
            onFocus={() => setCollapsed(false)}
          />
        )}
      </div>
      <Menu
        //theme="light"
        onSelect={(e) => onClickMenu(e.key)}
        defaultSelectedKeys={[selectedKey ?? "1"]}
        mode="inline"
        items={items}
      />
    </SiderStyled>
  );
};

const SiderStyled = styled(Sider)`
  z-index: 99;

  // 접혔을 때
  .ant-menu-light {
    background-color: transparent;
  }

  .ant-menu-vertical > .ant-menu-item {
    height: 50px;
    line-height: 50px;
  }

  // 펼쳤을 때
  .ant-menu-inline .ant-menu-item,
  .ant-menu-inline .ant-menu-submenu-title {
    margin-block: 10px;
    font-weight: 500;
    font-size: 1.1rem;
    height: 50px;
    //color: #1b5e1f;
  }

  .ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: #237d31;
  }

  .ant-menu-light .ant-menu-item-selected {
    color: #237d31;
    background-color: #e8f5e9;
    height: 50px;
  }

  .ant-menu .ant-menu-item .ant-menu-item-icon + span,
  .ant-menu .ant-menu-submenu-title .anticon + span {
    margin-inline-start: 20px;
  }
`;

const LogoCollapsed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  height: 80px;
  //background-color: red;
`;

const Img = styled.img`
  padding: 5px;
  width: 45px;
  background-color: #66bb69;
  border-radius: 8px;
  border: 1px solid #66bb69;
`;

const LogoUnCollapsed = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding-top: 20px;
  width: 100%;
  height: 80px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoText = styled.div`
  width: 10rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1b5e1f;
`;

const InputStyled = styled(Input)`
  margin: 20px;
  width: 17.5rem;
`;

const InputCollapsedStyled = styled(Input)`
  margin: 20px;
  width: 40px;
`;

export default MainMenu;
