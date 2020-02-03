import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types";

export const loadPosts = () => ({ type: LOAD_POSTS, payload: [] });

export const toggleBooked = id => ({ type: TOGGLE_BOOKED, payload: id });

export const removePost = id => ({ type: REMOVE_POST, payload: id });

export const addPost = post => ({ type: ADD_POST, payload: post });
