import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import React, { useState } from "react";
import Link from "next/link";
import DescriptionIcon from "@material-ui/icons/Description";
import Background from "../../src/component/Common/post_bg";

export default function ShareForm() {
  const [category, setCategory] = useState("1");

  const handleChange = async (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  const createPost = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:3000/api/register", {
      body: JSON.stringify({
        title: event.target.title.value,
        desc: event.target.desc.value,
        category: Number(category),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((value) => value.json());
    console.log(res);
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
              src="/images/product_image.png"
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
                {" "}
                김민지
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
            name="desc"
            type="text"
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
