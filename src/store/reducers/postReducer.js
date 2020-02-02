import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types";

const initialState = { allPosts: [], bookedPosts: [] };

export const postReducer = (state = initialState, action) => {
  const { allPosts, bookedPosts } = state;
  const { type, payload } = action;

  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: payload,
        bookedPosts: payload.filter(post => post.booked)
      };

    case TOGGLE_BOOKED:
      return {
        ...state,
        allPosts: allPosts.map(post => {
          if (post.id === payload) {
            post.booked = !post.booked;
          }

          return post;
        }),
        bookedPosts: allPosts.filter(post => post.booked)
      };

    case REMOVE_POST:
      return {
        ...state,
        allPosts: allPosts.filter(post => post.id !== payload),
        bookedPosts: bookedPosts.filter(post => post.id !== payload)
      };

    case ADD_POST:
      return {
        ...state,
        allPosts: [{ ...payload }, ...allPosts],
        bookedPosts: allPosts.filter(post => post.booked)
      };
    default:
      return state;
  }
};
