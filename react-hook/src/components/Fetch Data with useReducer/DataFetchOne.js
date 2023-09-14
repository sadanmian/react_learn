import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataFetchOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((res) => {
    //     setLoading(false);
    //     setPost(res.data);
    //     setError("");
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setPost({});
    //     setError("Something went wrong");
    //   });

    async function fetch() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setLoading(false);
        setPost(res.data);
        setError(null);
      } catch (error) {
        setLoading(false);
        setPost({});
        setError("Something went wrong || " + error);
      }
    }
    fetch();
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title} {error && error}
    </div>
  );
}
