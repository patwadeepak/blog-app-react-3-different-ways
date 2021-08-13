import React from "react";
import "../CSS/Post.css";
import { useEffect, useContext } from "react";
import { AppContext } from "../App";
import { useSelected } from "@lauf/store-react";

const Posts = () => {
  const store = useContext(AppContext);
  const posts = useSelected(store, (state) => state.posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        store.edit((draft) => (draft.posts = [...draft.posts, ...posts]));
      });
  }, [store]);

  return (
    <div className="posts-container">
      <div>
        <h1>{"Recent Posts"}</h1>
      </div>
      {posts.map((post, index) => (
        <div key={index}>
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
