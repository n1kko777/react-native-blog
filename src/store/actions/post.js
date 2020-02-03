import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types";
import { DB } from "../../db";

export const loadPosts = () => async dispatch =>
  dispatch({ type: LOAD_POSTS, payload: await DB.getPosts() });

export const toggleBooked = id => disptch =>
  disptch({ type: TOGGLE_BOOKED, payload: id });

export const removePost = id => dispatch =>
  dispatch({ type: REMOVE_POST, payload: id });

export const addPost = post => dispatch =>
  dispatch({ type: ADD_POST, payload: post });
