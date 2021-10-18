import Sorry from "./img/sorry.jpeg";
import "./index.css";

function NotOpen() {
  return (
    <div className="not-open">
      <div className="title">
        欢迎来到 <strong> cyc </strong> 的七维空间!
      </div>
      <div className="content">
        <h1> 网站维护中， 敬请期待~ </h1>
        <img src={Sorry} className="content-pic" />
      </div>
      <div className="bottom">
        <p> creat by cyc </p>
        <a
          className="bottom-code"
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
        >
          京ICP备2021023022号
        </a>
      </div>
    </div>
  );
}

export default NotOpen;
