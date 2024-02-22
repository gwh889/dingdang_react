import home from "./home.module.scss";
import ModuleCard from "@/components/moduleCard/moduleCard";
function Home() {
  return (
    <div className={home.home}>
      <div className={home.banner}>
        <video
          muted={true}
          controls
          autoPlay
          loop
          src={require("../../assets/vedio/banner.mp4")}
          style={{ width: "100%", objectFit: "fill" }}
        ></video>
        <div className={home.text1}>
          业有所<span>＂响＂</span>
        </div>
        <div className={home.text2}>
          数有所<span>＂应＂</span>
        </div>
        <div className={home.bgColor}></div>
      </div>
      <div className={home.homeContent}>
        <ModuleCard></ModuleCard>
      </div>
    </div>
  );
}

export default Home;
