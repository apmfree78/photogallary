// a reducer takes in 2 things

// 1. the action (info of what happens)
// 2. copy of current state

function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
    case 'REMOVE_COMMENT':
      return state;
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
}

export default comments;
