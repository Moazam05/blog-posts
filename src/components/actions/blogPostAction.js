import axios from 'axios';

import {
  BLOG_POST_REQUEST,
  BLOG_POST_SUCCESS,
  BLOG_POST_FAIL,
  BLOG_DETAIL_REQUEST,
  BLOG_DETAIL_SUCCESS,
  BLOG_DETAIL_FAIL,
} from '../constants/blogPostConstant';

export const blogPostAction = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_POST_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`);
    dispatch({
      type: BLOG_POST_SUCCESS,
      payload: data,
    });
    localStorage.setItem('blogPostInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: BLOG_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// single blog post
export const blogDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${id}`);
    dispatch({
      type: BLOG_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
