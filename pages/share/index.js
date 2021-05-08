import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import css from "styled-jsx/css";


export default function ShareForm() {
  const [category, setCategory] = useState("1");

  const handleChange = async event => {
    event.preventDefault();
    setCategory(event.target.value);
  }
  
  const createPost = async event => {
    event.preventDefault()

    const res = await fetch(
      'http://localhost:3000/api/register',
      {
        body: JSON.stringify({
          title: event.target.title.value,
          desc : event.target.desc.value,
          category: Number(category),
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    ).then((res) => res.json());
  }

    return( 
    <article style={{
      margin: "0px",
      paddingTop : "50px",
      paddingLeft:"60px",
      paddingRight:"60px",
    }}>
     <div  style={{
              backgroundColor : "white",
              height: "1525px",
              margin: "0px",
              paddingTop : "85px",
              paddingLeft:"65px",
              paddingRight:"65px",
              zIndex:1,
            }} >
   
 <form action="/create_process" method="post" onSubmit={createPost}>
   <div class= "section-top" style={{
           display: "inline-flex"
            }}>
     <div class = "wrapper">
        <img className="img-form" src="/images/product_image.png" alt="logo" style= {{ backgroundColor : "white",
  height: "416px",
  width: "404px",
  boxShadow : "1px 1px 2px grey",
  border : "1px solid DCDCDC"}}/>
            </div>
<div class = "wrapper">
 <div class = "category-form" style = {{
   background:"url('/images/selection_arrow.png') no-repeat 97% 50%/25px auto",
   border : "1px solid #606060",
   borderRadius : "10px",
   width : "180px",
   height : "52px",
 }}>
 <select id="category" onChange={handleChange} value={category} 
            style={{
              width : "180px",
              height : "52px",
              background:"transparent",
              border : "none",
              fontSize : "23px",
              color: "#F85757",
              borderRadius : "10px",
              textAlign: "center",
              appearance:"none",
              boxSizing : "border-box"
            }}>
      <option selected value = "1">나눔받기</option>
      <option value = "2">나눔하기</option>
    </select></div>
      <p><input id = "title-form" name="title" type="text" style = {{  backgroundColor : "white",
  height: "92px",
  width: "644px",
  fontSize : "45px",
  zIndex:1,
  }}></input></p>
        <div class = "wrapper">
        <img className="profile-img" src="/images/profile_image.png" alt="logo"/>
        <span className ="profile-name" style={{
            fontSize : "25px"
            }}> 김민지</span>
        <span className ="post-date" style={{
            fontSize : "25px",
            color: "#727272",
            }} >2021.4.21</span>
            </div>
            </div>
            </div>
      <Divider />
      <div class = "section-main">
      <div class = "wrapper">
      <img className="icon" src="/images/outline_description_black_24dp.png" alt="logo" style = {{ width : "35px", height : "35px"}}/>
        <span style = {{ fontSize : "35px", fontWeight : "bold" }}>정보</span>
      </div>
        <textarea id = "desc-form" name="desc" type="text" style ={{
           backgroundColor : "white",
  height: "482px",
  width: "1128px",
  zIndex:1,
  }}></textarea>
        </div>
        <div class ="section-bottom" style={{
           display: "inline-flex"
            }}>
       <Link href = '/' class = "btnStyle.cancel-btn" >
          <div style= {{ 
         backgroundColor : "white",
        border : "none",
        fontSize : "35px",
        color: "#7E7979",
        textDecoration : "underline",
        }}>취소하기</div></Link>
       <button class = "submit-btn" type="submit" style = {{
             backgroundColor : "#F85757",
             borderRadius : "25px",
             height: "63px",
             width: "273px",
             fontSize : "26px",
             color: "white",
       }}>글 등록하기</button>
        </div>
    </form>
    {/* <style global jsx>{imgStyle}</style>
    <style global jsx>{formStyle}</style>
    <style global jsx>{btnStyle}</style> */}
</div>
</article>
);

``}

// const btnStyle = css`
//   .cancel-btn{
//     background-color : "white";
//     border : "none";
//     font-size : "26px";
//     color: "black";
//     text-decoration : "underline";
//   }
//   .submit-btn{
//     background-color : "#F85757";
//     border-radius : "25px";
//     height: "63px";
//     width: "273px";
//     font-size : "26px";
//     color: "white";
//   }
// `;
// const imgStyle = css`
//   .profile-img{
//     border-radius: "50%",
//   }
// `;

// const formStyle = css`
// .img-form {
//   background-color : "white";
//   height: "416px";
//   width: "404px";
//   box-shadow : "1px 1px 2px grey";
//   border : "1px solid DCDCDC";
// }

// .category-form{
//   background:"url('/images/selection_arrow.png') no-repeat 97% 50%/25px auto";
//   border : "1px solid #606060";
//   border-radius : "10px";
//   width : "180px";
//   height : "52px";
// }

// #title-form{
//   background-color : "white";
//   height: "92px";
//   width: "644px";
//   font-size : "45px";
//   z-index:1;
// }

// #desc-form{
//   background-color : "white";
//   height: "482px";
//   width: "1128px";
//   z-index:1;
// }
// `;