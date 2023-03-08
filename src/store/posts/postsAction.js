import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    let page = getState().postsReducer.page;

    if (newPage) {
      page = newPage;
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast;

    console.log(token);

    if (!token || isLast) return;

    console.log(token);

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then(({data}) => {
        let newPosts = data.data.children;

        if (after) {
          newPosts = [...getState().postsReducer.posts, ...data.data.children];
        }
        console.log(newPosts);
        return {posts: newPosts, after: data.data.after};
      })
      .catch((err) => {
        console.error(err);
        return {err: err.toString()};
      });
  }
);
