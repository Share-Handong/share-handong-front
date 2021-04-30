
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
    <article>
      <div>
    <h2>Create</h2>
    <form action="/create_process" method="post" onSubmit={createPost}
    >
      <p><input id = "title" name="title" type="text"></input></p>
      <p>
        <textarea id = "desc" name="desc" type="text"></textarea>
      </p>
      <p>
        <button type="submit" >제출</button>
      </p>
    </form>
    </div>
</article>);
``}
