import "../CSS/PostForm.css";
import { useState } from "react";
import { connect } from "react-redux";
import { object } from "prop-types";
import { createNewPost } from "../actions/postActions";

const initialFormState = { title: "", body: "" };

const PostForm = ({ createNewPost }) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handlePostIt = (ev) => {
    ev.preventDefault();
    createNewPost(formData);
    setFormData(initialFormState);
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createNewPost })(PostForm);
