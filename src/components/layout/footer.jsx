import footer from "./footer.module.scss";
import { useNavigate } from "react-router-dom";
function Footer() {
    const navigate = useNavigate();
    const OnClick=(path)=>{
        navigate(path)
    }
  return (
    <div className={footer.footer}>
      <div className={footer.footerBox}>
        <div className={footer.left}>
          <div className={footer.footerLogo}>
            <div
              style={{ paddingRight: "20px", borderRight: "1px solid #fff" }}
            >
              <img
                style={{ width: "70px" }}
                src={require("../../assets/logo2.png")}
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <img
                style={{ width: "80px" }}
                src={require("../../assets/logo3.png")}
              />
            </div>
          </div>
          <div className={footer.copy}>©Copyright+[dates]+[author/owner]</div>
        </div>
        <div className={footer.center}>
          <div className={footer.textTitle}>快速导航</div>
          <div className={footer.ewmBox}>
            <div style={{ margin: "2px 4px", cursor: "pointer" }} onClick={()=>{OnClick("/home")}}>网站首页</div>
            <div style={{ margin: "2px 4px", cursor: "pointer" }} onClick={()=>{OnClick("/hengfengZhiwang")}}>恒丰智网</div>
            <div style={{ margin: "2px 4px", cursor: "pointer" }} onClick={()=>{OnClick("/external")}}>外部数据</div>
          </div>
          <div className={footer.ewmBox}>
            <div style={{ margin: "2px 4px", cursor: "pointer" }} onClick={()=>{OnClick("/dataStandards")}}>数据治理</div>
            <div style={{ margin: "2px 4px", cursor: "pointer" }} onClick={()=>{OnClick("/error")}}>数据安全</div>
            <div style={{ margin: "2px 4px", cursor: "pointer" }} onClick={()=>{OnClick("/news")}}>新闻资讯</div>
          </div>
        </div>
        <div className={footer.right}>
          <div className={footer.textTitle}>联系我们</div>
          <div className={footer.textContent}>
            地址：济南市历下区泺源大街8号绿城金融中心
          </div>
          <div className={footer.textContent}>邮编：250000</div>
          <div className={footer.textContent}>电话：0531-59666132</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
