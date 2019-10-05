import { ADD_COMMENT, 
    REMOVE_COMMENT, 
    EDIT_COMMENT, 
    THUMB_UP_COMMENT, 
    THUMB_DOWN_COMMENT } from "./actionTypes";

import uuid from "uuid";

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  };
}

export function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}

// export const boundAddComment = text => dispatch(addComment(text));
// export const boundEditComment = text => dispatch(editComment(text, id));
// export const boundRemoveComment = id => dispatch(removeComment(id));
// export const boundThumbUpComment = id => dispatch(thumbUpComment(id));
// export const boundThumbDownComment = id => dispatch(thumbDownComment(id));