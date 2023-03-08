import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        const post = data[0].data.children[0].data;
        const comments = data[1].data.children.filter(
          (item) => item.kind === 't1'
        );
        return {post, comments};
      })
      .catch((err) => ({error: err.toString()}));
  }
);
