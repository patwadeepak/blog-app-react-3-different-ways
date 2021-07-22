import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import { useEffect, createContext, useReducer } from "react";

const appReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, ...action.payload];
    case "NEW_POST":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const AppContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="app-container">
        <h1>Blog Post App using Old ways of Redux</h1>
        <PostForm />
        <Posts />
      </div>
    </AppContext.Provider>
  );
};

export default App;
