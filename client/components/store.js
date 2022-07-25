import { createStore, compse } from 'redux';
import { synHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reduces
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object from the default data
const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);

export const history = synHistoryWithStore(browserHistory, store);

export default store;
