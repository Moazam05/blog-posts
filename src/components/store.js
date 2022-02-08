import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { blogPostReducer, blogDetailReducer } from './reducers/blogPostReducer';

const reducer = combineReducers({
  blogPost: blogPostReducer,
  blogDetail: blogDetailReducer,
});

const blogPostInfoFromStorage = localStorage.getItem('blogPostInfo')
  ? JSON.parse(localStorage.getItem('blogPostInfo'))
  : null;

const initialState = {
  blogPost: { blogPost: blogPostInfoFromStorage },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
