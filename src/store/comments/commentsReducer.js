import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
} from './commentsAction';

const initialState = {
  post: '',
  comments: '',
  error: '',
  status: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        post: '',
        comments: '',
        error: '',
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.post,
        comments: action.comments,
        error: '',
        status: 'loaded',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        status: 'error',
        post: '',
        comments: '',
      };
    default:
      return state;
  }
};
