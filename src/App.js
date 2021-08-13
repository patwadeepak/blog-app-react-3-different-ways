import React from "react";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import { createContext } from "react";
import { useStore } from "@lauf/store-react";

export const AppContext = createContext();

const INITIAL_STATE = {
  posts: [],
};

const App = () => {
  const store = useStore(INITIAL_STATE);

  return (
    <AppContext.Provider value={store}>
      <div className="app-container">
        <h1>Blog Post App using Lauf Store</h1>
        <PostForm />
        <Posts />
      </div>
    </AppContext.Provider>
  );
};

export default App;
