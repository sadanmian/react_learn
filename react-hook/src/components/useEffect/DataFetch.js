import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();

    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     console.log(res);
    //     setPosts(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
