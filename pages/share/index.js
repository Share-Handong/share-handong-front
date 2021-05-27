import Link from "next/link";
import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import ReplyIcon from "@material-ui/icons/Reply";
import CreateIcon from "@material-ui/icons/Create";
import DescriptionIcon from "@material-ui/icons/Description";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../../src/component/Common/post_bg";
import AuthService from "../../src/component/Common/AuthService";

export default function Share() {
  const checkLogin = AuthService.isUserLoggedIn === true; // 사용자- 포스팅 주인 id 비교 추가 예정
  const [postData, setPostData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
    imgUrl: "",
    uploadTime: "",
    category: 1,
  });

  const [userData, setUserData] = useState({
    name: "",
    profileImg: "",
  });

  const { title, body, imgUrl, uploadTime, category } = {
    title: postData.title,
    body: postData.body,
    imgUrl: "/images/product_image.png",
    uploadTime: "2021.4.21",
    category: 2,
  };
  const { name, profileImg } = userData;

  function loadPostData() {
    axios.get("http://jsonplaceholder.typicode.com/posts?id=2").then((res) => {
      setPostData(res.data[0]);
      console.log(res.data[0]);
    });
  }

  function loadUserData() {
    axios.get("http://jsonplaceholder.typicode.com/users?id=2").then((res) => {
      setUserData({
        name: res.data[0].username,
        profileImg: "/images/profile_image.png",
      });
      console.log(res.data[0]);
    });
  }
  useEffect(() => {
    loadPostData();
    loadUserData();
    console.log(AuthService.getLoggedInUserId);
  }, []);

  return (
    <Background>
      <div
        className="section-top"
        style={{
          display: "inline-flex",
        }}
      >
        <div className="wrapper">
          <img
            className="img-form"
            src={imgUrl}
            alt="logo"
            style={{
              backgroundColor: "white",
              height: "416px",
              width: "404px",
              boxShadow: "1px 1px 2px grey",
              border: "1px solid DCDCDC",
            }}
          />
        </div>
        <div className="wrapper" style={{ paddingLeft: "80px" }}>
          <div
            className="category"
            style={{
              fontSize: "23px",
              fontWeight: "bold",
              color: "#F85757",
              marginBottom: "20px",
            }}
          >
            {category === 1 ? "나눔받기" : "나눔하기"}
          </div>
          <div className="title " style={{ fontSize: "45px" }}>
            <p>{title}</p>
          </div>
          <div
            className="wrapper"
            style={{
              paddingTop: "40px",
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              className="profile-img"
              style={{ borderRadius: "50%", marginRight: "18px" }}
              src={profileImg}
              alt="logo"
            />
            <span
              className="profile-name"
              style={{
                fontSize: "25px",
                paddingRight: "36px",
              }}
            >
              {name}
            </span>
            <span
              className="post-date"
              style={{
                fontSize: "25px",
                color: "#727272",
              }}
            >
              {uploadTime}
            </span>
          </div>
          {!checkLogin ? (
            <div className="wrapper" style={{ marginTop: "54px" }}>
              <button
                className="delete-btn"
                type="submit"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "25px",
                  height: "63px",
                  width: "273px",
                  fontSize: "26px",
                  color: "#7E7979",
                  borderColor: "#585858",
                  borderWidth: "1px",
                  boxShadow: "2px 2px 2px #585858",
                  marginRight: "36px",
                  textAlign: "center",
                }}
              >
                삭제하기
              </button>
              <Link
                href={{
                  pathname: "/share-form",
                  query: { id: postData.id, type: "modify" },
                }}
              >
                <button
                  className="submit-btn"
                  type="submit"
                  style={{
                    backgroundColor: "#F85757",
                    borderRadius: "25px",
                    height: "63px",
                    width: "273px",
                    fontSize: "26px",
                    color: "white",
                    border: "none",
                    boxShadow: "2px 2px 2px #585858;",
                    textAlign: "center",
                  }}
                >
                  수정하기
                </button>
              </Link>
            </div>
          ) : (
            <div className="wrapper" style={{ marginTop: "54px" }}>
              <button
                className="delete-btn"
                type="submit"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "25px",
                  height: "63px",
                  width: "273px",
                  fontSize: "26px",
                  color: "#7E7979",
                  borderColor: "#585858",
                  borderWidth: "1px",
                  boxShadow: "2px 2px 2px #585858",
                  marginRight: "36px",
                  textAlign: "center",
                }}
              >
                찜하기
              </button>
              {/* <Link href="/share-form"> */}
              <button
                className="submit-btn"
                type="submit"
                style={{
                  backgroundColor: "#F85757",
                  borderRadius: "25px",
                  height: "63px",
                  width: "273px",
                  fontSize: "26px",
                  color: "white",
                  border: "none",
                  boxShadow: "2px 2px 2px #585858;",
                  textAlign: "center",
                }}
              >
                연락하기
              </button>
              {/* </Link> */}
            </div>
          )}
        </div>
      </div>
      <Divider />
      <div className="section-main">
        <div
          className="wrapper"
          style={{ marginTop: "60px", paddingBottom: "34px" }}
        >
          <DescriptionIcon style={{ fontSize: 35 }} />
          <span
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              paddingLeft: "8px",
              color: "#1A1818",
            }}
          >
            정보
          </span>
        </div>
        <div
          className="desc"
          style={{ fontSize: "30px", color: "#1A1818", paddingBottom: "100px" }}
        >
          {body}
        </div>
      </div>
      <Divider />
      <div
        className="section-bottom"
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <div
          className="comment-num"
          style={{ marginTop: "60px", marginBottom: "24px", fontSize: "30px" }}
        >
          <span style={{ color: "#1A1818", paddingRight: "8px" }}>댓글</span>
          <span style={{ color: "#FF4B4B" }}>1</span>
        </div>
        <div
          className="comment-form-box"
          style={{
            height: "70px",
            width: "1129px",
            border: "1px  solid #7A7A7A",
            backgroundColor: "white",
            borderWidth: "1px",
            marginBottom: "60px",
            paddingLeft: "8px",
          }}
        >
          <input
            id="comment-form"
            name="comment"
            type="text"
            placeholder="댓글을 입력하세요"
            style={{
              fontSize: "30px",
              backgroundColor: "transparent",
              border: "transparent",
              width: "952px",
              height: "70px",
              borderRight: "0.8px solid #767676",
            }}
          />
          <button
            className="comment-btn"
            type="submit"
            style={{
              backgroundColor: "white",
              height: "67px",
              width: "166px",
              fontSize: "25px",
              color: "#1A1818",
              border: "transparent",
              justifySelf: "end",
              paddingRight: "36px",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <span
              className="icon"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <CreateIcon />
            </span>
            등록
          </button>
        </div>
        <div className="comment-box">
          <p style={{ fontSize: "30px" }}>제꺼도 같이 해주실 분 ^^..</p>
          <div
            className="wrapper"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              width: "1129px",
            }}
          >
            <img
              className="profile-img"
              style={{ borderRadius: "50%", marginRight: "18px" }}
              src="/images/profile_image.png"
              alt="logo"
            />
            <span
              className="profile-name"
              style={{
                fontSize: "25px",
                paddingRight: "36px",
              }}
            >
              {name}
            </span>
            <span
              className="post-date"
              style={{
                fontSize: "25px",
                color: "#727272",
              }}
            >
              2021.4.21
            </span>
            <button
              className="reply-btn"
              type="submit"
              style={{
                backgroundColor: "white",
                border: "none",
                fontSize: "25px",
                color: "#1A1818",
                marginLeft: "56px",
              }}
            >
              {" "}
              <ReplyIcon /> <span>댓글달기</span>
            </button>
          </div>
        </div>
        <Divider />
      </div>
    </Background>
  );
}
