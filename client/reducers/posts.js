// a reducer takes in 2 things

// 1. the action (info of what happens)
// 2. copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
