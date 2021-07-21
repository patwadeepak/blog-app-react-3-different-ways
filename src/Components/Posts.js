import "../CSS/Post.css";
import { useEffect } from "react";

const Posts = ({ setPostData, PostData }) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);

  return (
    <div className="posts-container">
      <div>
        <h1>{"Recent Posts"}</h1>
      </div>
      {PostData.map((post, index) => (
        <div key={index}>
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
