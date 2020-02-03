import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from "../types";
import * as FileSystem from "expo-file-system";
import { DB } from "../../db";

export const loadPosts = () => async dispatch =>
  dispatch({ type: LOAD_POSTS, payload: await DB.getPosts() });

export const toggleBooked = id => disptch =>
  disptch({ type: TOGGLE_BOOKED, payload: id });

export const removePost = id => dispatch =>
  dispatch({ type: REMOVE_POST, payload: id });

export const addPost = post => async dispatch => {
  const fileName = post.img.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img
    });
  } catch (error) {
    console.error("Error: ", error);
  }

  const payload = { ...post, img: newPath };
  const id = await DB.createPost(payload);

  payload.id = id;

  return dispatch({ type: ADD_POST, payload });
};
