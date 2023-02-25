import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});
export const commentsRequestSuccess = (post, comments) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  post,
  comments,
});
export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(commentsRequest());
  console.log('id: ', id);
  console.log('URL_API: ', URL_API);
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      dispatch(
        commentsRequestSuccess(
          data[0].data.children[0].data,
          data[1].data.children.filter((item) => item.kind === 't1')
        )
      );
    })
    .catch((err) => {
      console.error(err);
      dispatch(commentsRequestError(err.toString()));
    });
};
