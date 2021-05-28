import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import DescriptionIcon from "@material-ui/icons/Description";
import axios from "axios";
import { useRouter } from "next/router";
import Background from "../../src/component/Common/post_bg";
import AuthService from "../../src/component/Common/AuthService";

export default function ShareForm() {
  const router = useRouter();
  const { id, type } = router.query;
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

  const titleInput = useRef();
  const bodyInput = useRef();

  const { title, body } = { title: postData.title, body: postData.body };
  const { imgUrl, uploadTime, category } = {
    imgUrl: "/images/product_image.png",
    uploadTime: "2021.4.21",
    category: postData.category,
  };
  const { name, profileImg } = userData;

  function loadPostData(currentId) {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts?id=${currentId}`)
      .then((res) => {
        setPostData(res.data[0]);
      });
  }

  function loadUserData(currentId) {
    axios
      .get(`http://jsonplaceholder.typicode.com/users?id=${currentId}`)
      .then((res) => {
        setUserData({
          name: res.data[0].username,
          profileImg: "/images/profile_image.png",
        });
        // console.log(res.data[0]);
      });
  }

  useEffect(() => {
    if (type === "modify") {
      loadPostData(id);
      loadUserData(id);
    }
  }, []);

  const handleChange = (e) => {
    const { value, targetName } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setPostData({
      ...postData, // 기존의 input 객체를 복사한 뒤
      [targetName]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const createPost = async (event) => {
    event.preventDefault();
    AuthService.setupAxiosInterceptors();
    axios
      .post(
        "http://localhost:3000/api",
        {
          title,
          desc: body,
          category: Number(category),
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        },
      )
      .then((response) => {
        console.log(response.data);
        router.replace("/share");
      });
    // .catch((error) => {
    //     console.log('Error!');
    // });
  };
  return (
    <Background>
      <form action="/create_process" method="post" onSubmit={createPost}>
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
              className="category-form"
              style={{
                background:
                  "url('/images/selection_arrow.png') no-repeat 97% 50%/25px auto",
                border: "1px solid #606060",
                borderRadius: "10px",
                width: "180px",
                height: "52px",
                marginBottom: "20px",
              }}
            >
              <select
                id="category"
                onChange={handleChange}
                value={category}
                style={{
                  width: "180px",
                  height: "52px",
                  background: "transparent",
                  border: "none",
                  fontSize: "23px",
                  color: "#F85757",
                  borderRadius: "10px",
                  textAlign: "center",
                  appearance: "none",
                  boxSizing: "border-box",
                  paddingLeft: "28px",
                }}
              >
                <option selected value="1">
                  나눔받기
                </option>
                <option value="2">나눔하기</option>
              </select>
            </div>
            <p>
              <input
                id="title-form"
                name="title"
                type="text"
                onChange={handleChange}
                ref={titleInput}
                value={title}
                style={{
                  backgroundColor: "white",
                  height: "92px",
                  width: "644px",
                  fontSize: "45px",
                  zIndex: 1,
                }}
              />
            </p>
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
          <textarea
            id="desc-form"
            name="body"
            type="text"
            value={postData.body}
            ref={bodyInput}
            onChange={handleChange}
            style={{
              backgroundColor: "white",
              height: "482px",
              width: "1128px",
              zIndex: 1,
            }}
          />
        </div>
        <div
          className="section-bottom"
          style={{
            width: "1128px",
            display: "inline-flex",
            flexFlow: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "56px",
          }}
        >
          <Link href="/share" className="cancel-btn">
            <div
              style={{
                backgroundColor: "white",
                border: "none",
                fontSize: "35px",
                color: "#7E7979",
                textDecoration: "underline",
                paddingRight: "48px",
              }}
            >
              취소하기
            </div>
          </Link>
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
            }}
          >
            글 등록하기
          </button>
        </div>
      </form>
    </Background>
  );
}
