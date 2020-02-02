import { LOAD_POSTS } from "../types";

const initialState = { allPosts: [], bookedPosts: [] };

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: payload,
        bookedPosts: payload.filter(post => post.booked)
      };
    default:
      return state;
  }
};
