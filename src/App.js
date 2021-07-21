import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import { useState } from "react";

const App = () => {
  const [PostData, setPostData] = useState([]);

  const addPost = (formData) => {
    setPostData([formData, ...PostData]);
  };

  return (
    <div className="app-container">
      <h1>Blog Post App using Old ways of Redux</h1>
      <PostForm addPost={addPost} />
      <Posts setPostData={setPostData} PostData={PostData} />
    </div>
  );
};

export default App;
