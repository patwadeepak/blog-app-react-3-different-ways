import "../CSS/PostForm.css";
import { useState } from "react";

const PostForm = ({ addPost }) => {
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
    addPost(formData);
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
