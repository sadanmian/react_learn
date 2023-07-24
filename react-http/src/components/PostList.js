import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        this.setState({
          post: response.data,
        });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({
          errorMsg: "Error Retreiving Data",
        });
      });
  }
  render() {
    const { post, errorMsg } = this.state;
    return (
      <div>
        List of Post
        {post.length
          ? post.map((e) => (
              <div key={e.id}>
                <h1>
                  {e.id}. {e.title}
                </h1>
                <span>{e.body}</span>
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
