import { Provider } from "react-redux";
import store from "./store";

import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1>Blog Post App using Old ways of Redux</h1>
      <PostForm />
      <Posts />
    </div>
  </Provider>
);

export default App;
