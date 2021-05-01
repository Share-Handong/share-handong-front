import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import React, { useEffect, useState } from "react";

export default function ShareForm() {
  const [category, setCategory] = useState('');
 
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
          category: category,
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
 <select id="category" onChange={handleChange} value={category}>
      <option selected value = "나눔받기">나눔받기</option>
      <option value = "나눔하기">나눔하기</option>
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
      <Divider />
      <p>
        <textarea id = "desc" name="desc" type="text" style={{
              backgroundColor : "white",
              height: "482px",
              width: "1128px",
              zIndex:1,
            }} ></textarea>
      </p>
      
      <p>
        <button type="submit" >제출</button>
      </p>
    </form>
</div>
</article>

);

``}
