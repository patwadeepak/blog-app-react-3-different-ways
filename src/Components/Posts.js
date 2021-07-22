import "../CSS/Post.css";
import { useEffect } from "react";
import { func, array, object } from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        fetchPosts(posts);
      });
  }, []);

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

Posts.propTypes = {
  posts: array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
