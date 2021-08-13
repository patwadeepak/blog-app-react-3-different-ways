import React from "react";
import "../CSS/PostForm.css";
import { useState, useContext } from "react";
import { AppContext } from "../App";

const PostForm = () => {
  const store = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handlePostIt = (ev) => {
    ev.preventDefault();
    store.edit((draft) => draft.posts.unshift(formData));
    setFormData({ title: "", body: "" });
  };

  return (
    <div className="postform-container">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />
      <br />
      <label htmlFor="body">Post</label>
      <textarea name="body" onChange={handleChange} value={formData.body} />
      <br />
      <button type="submit" onClick={handlePostIt}>
        Post it
      </button>
    </div>
  );
};

export default PostForm;
