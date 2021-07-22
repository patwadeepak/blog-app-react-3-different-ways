import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  posts: {
    items: [],
    item: { title: "some title", body: "some body" },
  },
};

const store = createStore(rootReducer, initialState);

export default store;
