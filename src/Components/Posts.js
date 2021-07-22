import "../CSS/Post.css";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";

const Posts = () => {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        dispatch({ type: "FETCH_POSTS", payload: posts });
      });
  }, []);

  return (
    <div className="posts-container">
      <div>
        <h1>{"Recent Posts"}</h1>
      </div>
      {state.map((post, index) => (
        <div key={index}>
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
