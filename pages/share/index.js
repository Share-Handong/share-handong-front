import "semantic-ui-css/semantic.min.css";

export default function ShareForm() {
  const createPost = async event => {
    event.preventDefault()

    const res = await fetch(
      'http://localhost:3000/api/register',
      {
        body: JSON.stringify({
          title: event.target.title.value,
          desc : event.target.desc.value
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
      <p><input id = "title" name="title" type="text"></input></p>
      <p>
        <textarea id = "desc" name="desc" type="text"  ></textarea>
      </p>
      <p>
        <button type="submit" >제출</button>
      </p>
    </form>
   
</div>
</article>

);

``}
