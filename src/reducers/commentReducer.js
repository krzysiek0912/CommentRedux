import { ADD_COMMENT, 
    REMOVE_COMMENT, 
    EDIT_COMMENT, 
    THUMB_UP_COMMENT, 
    THUMB_DOWN_COMMENT } from "../actions/actionTypes";

const initialState = {
  comments: [],
  users: []
};

function commentsReducer(state = initialState, action) {
  if(!state) state=initialState;
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: action.id,
            text: action.text,
            votes: 0
          }
        ]
      }; 

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.id)
      };
      
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.id) comment.text = action.text;

          return comment;
        })
      };

    case THUMB_UP_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.id) comment.votes += 1;

          return comment;
        })
      };

    case THUMB_DOWN_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.id && comment.votes>0) comment.votes -= 1;

          return comment;
        })
      };

    default:
      return state;
  }
}

export default commentsReducer;