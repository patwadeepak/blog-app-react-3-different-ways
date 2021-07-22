import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = (postsData) => {
  return {
    type: FETCH_POSTS,
    payload: postsData,
  };
};

export const createNewPost = (postData) => {
  return {
    type: NEW_POST,
    payload: postData,
  };
};
