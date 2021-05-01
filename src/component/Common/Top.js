import { Icon, Input } from "semantic-ui-react";
import css from "styled-jsx/css";

const style = css`
  .top-wrap {
    background-color: white;
    height: 60px;
  }
`;

export default function Top() {
  return (
    <>
      <div className="top-wrap">
        <div className="sub">
          {/* 로고 */}
          <img className="logo" src="/images/sh_logo.png" alt="logo" />
          {/* 검색 */}
          <Input
            style={{
              width: "40%",
              height: "40px",
              marginLeft: "30px",
              marginTop: "10px",
            }}
            action="Search"
            placeholder="Search..."
          />
          {/* 알림 */}
          <Icon
            style={{
              width: "5%",
              height: "40px",
              lineHeight: "40px",
              marginLeft: "30px",
              marginTop: "10px",
              fontSize: "25px",
            }}
            name="bell outline"
          />
          {/* 마이페이지 */}
          <Icon
            style={{
              width: "5%",
              height: "40px",
              lineHeight: "40px",
              marginTop: "10px",
              fontSize: "25px",
            }}
            name="user outline"
          />
        </div>
      </div>
      <style jsx>{`
        .sub {
          height: 60px;
          width: 70%;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
        }
        .logo {
          width: 230px;
          height: 60px;
          margin: 13px;
        }
      `}</style>
      <style jsx>{style}</style>
    </>
  );
}
