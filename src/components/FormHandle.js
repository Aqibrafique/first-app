import React, { useState } from "react";
// import { PureComponent } from "react";


function FormHandle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Aqib");
  const handleSubmit = (e) => {
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Blog Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      
      <label>Blog Author</label>
      <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="Aqib">Aqib</option>
        <option value="hassan">Hassan</option>
        <option value="abid">Abid</option>
      </select>
      <br />
      <button type="submit">Submit</button>
      </form>
      <h3>
        {title}
        <br />
        {body}
        <br />
        {author}
      </h3>
    </>
  );
}

// export default PureComponent(FormHandle);
// export default FormHandle;
export default React.memo(FormHandle);
