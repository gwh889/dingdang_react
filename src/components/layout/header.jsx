import header from "./header.module.scss";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const items = [
  {
    label: "首页",
    key: "/home",
  },
  {
    label: "产品中心",
    key: "2",
    children: [
      {
        label: "恒丰智网",
        key: "2-1",
      },
      {
        label: "外部数据",
        key: "/external",
      },
      {
        label: "数据安全",
        key: "2-3",
      },
      {
        label: "数据治理",
        key: "2-4",
      },
    ],
  },
  {
    label: "新闻资讯",
    key: "3",
  },
  {
    label: "恒必应",
    key: "4",
  },
  {
    label: "挂牌中心",
    key: "5",
  },
  {
    label: "创新样板间",
    key: "6",
  },
  {
    label: "数字换转型",
    key: "7",
  },
];

function Header() {
  const [current, setCurrent] = useState("1");
  const navigate = useNavigate();

  const OnClick = (e) => {
    navigate(e.key);
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className={header.header}>
      <div className={header.headerBox}>
        <div className={header.headerLogo}>
          <img src={require("../../assets/logo.png")} alt="图片" />
          <span className={header.text}>数据资源门户</span>
        </div>
        <Menu
          onClick={OnClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            height: "60px",
            backgroundColor: "transparent",
            color: "#fff",
            lineHeight: "60px",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
