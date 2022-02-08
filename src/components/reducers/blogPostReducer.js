import {
  BLOG_POST_REQUEST,
  BLOG_POST_SUCCESS,
  BLOG_POST_FAIL,
  BLOG_DETAIL_REQUEST,
  BLOG_DETAIL_SUCCESS,
  BLOG_DETAIL_FAIL,
} from '../constants/blogPostConstant';

export const blogPostReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_POST_REQUEST:
      return { loading: true };
    case BLOG_POST_SUCCESS:
      return { loading: false, blogPostInfo: action.payload };
    case BLOG_POST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// single blog post
export const blogDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DETAIL_REQUEST:
      return { loading: true };
    case BLOG_DETAIL_SUCCESS:
      return { loading: false, blogDetail: action.payload };
    case BLOG_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
