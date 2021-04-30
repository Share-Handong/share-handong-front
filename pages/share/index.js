
export default function ShareForm() {

    return( 
    <article>
      <div>
    <h2>Create</h2>
    <form action="/create_process" method="post"
    >
      <p><input id = "title" name="title" type="text"></input></p>
      <p>
        <textarea id = "desc" name="desc" type="text"></textarea>
      </p>
      <p>
        <button type="submit">제출</button>
      </p>
    </form>
    </div>
</article>);
``}
