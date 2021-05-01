import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

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
      // width: "91.6%",
      margin: "0px",
      paddingTop : "50px",
      paddingLeft:"60px",
      paddingRight:"60px",
    }}>
     <div  style={{
              backgroundColor : "white",
              height: "1525px",
              margin: "0px",
              paddingTop : "250px",
              paddingLeft:"65px",
              paddingRight:"65px",
              zIndex:1,
            }} >
   
 <form action="/create_process" method="post" onSubmit={createPost}>
   <div class= "post_top" style={{
           display: "inline-flex"
            }}>
     <div class = "post_img">
 <img className="product" src="/images/product_image.png" alt="logo" style={{
              backgroundColor : "white",
              height: "416px",
              width: "404px",
              boxShadow : "1px 1px 2px grey",
              border : "1px solid DCDCDC"
              
            }} /></div>
<div class = "post_info">
 <select id="category" onChange={handleChange} value={category}>
      <option selected value = "1">나눔받기</option>
      <option value = "2">나눔하기</option>
    </select>
      <p><input id = "title" name="title" type="text" style={{
              backgroundColor : "white",
              height: "92px",
              width: "644px",
              fontSize : "45px",
              // marginLeft: "88px",
              // marginRight: "88px",
              zIndex:1,
            }}></input></p>
        <div class = "writer-info">
        <img className="icon" src="/images/profile_image.png" alt="logo" />
        <span>김민지</span>
        <span>2021.4.21</span>
            </div>
            <div class = "button">
            <button type="submit" >삭제하기</button>
            <button type="submit" >수정하기</button>
            </div>
            </div>
            </div>
      <Divider />
      <div class = "section-title">
      <img className="icon" src="/images/outline_description_black_24dp.png" alt="logo" />
        <span>정보</span>
      </div>
        <textarea id = "desc" name="desc" type="text" style={{
              backgroundColor : "white",
              height: "482px",
              width: "1128px",
              zIndex:1,
            }} ></textarea>
       <div class ="section-bottom">
        <button type="submit" >제출</button>
        </div>
    </form>
</div>
</article>

);

``}
