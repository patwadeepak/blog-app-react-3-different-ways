import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: { title: "", body: "" },
};

const postReducer = (state = initialState, action) => {
  if (action.type === FETCH_POSTS) {
    return {
      ...state,
      items: action.payload,
    };
  } else if (action.type === NEW_POST) {
    return {
      ...state,
      items: [action.payload, ...state.items],
    };
  } else return state;
};

export default postReducer;
