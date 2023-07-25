import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, SetIdFromButton] = useState(1);

  const handleClick = () => {
    SetIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {post.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
