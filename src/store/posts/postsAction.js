import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState, rejectWithValue}) => {
    let page = getState().postsReducer.page;

    if (newPage) {
      page = newPage;
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast;

    if (!token) return rejectWithValue({error: 'Ошибка авторизации'});
    if (isLast) return getState().postsReducer.posts;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
      {rejectWithValue}
    )
      .then(({data}) => {
        let newPosts = data.data.children;

        if (after) {
          newPosts = [...getState().postsReducer.posts, ...data.data.children];
        }
        console.log(newPosts);
        return {posts: newPosts, after: data.data.after};
      })
      .catch((error) => {
        console.error(error);
        return rejectWithValue({error: error.toString()});
      });
  }
);
