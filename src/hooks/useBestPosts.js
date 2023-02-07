import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPost = () => {
  const [posts, setPosts] = useState({});
  const {token} = useContext(tokenContext);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error('401 статус');
        }
        return response.json();
      })
      .then((data) => {
        const dataPost = data.data.children
          .map((post) => post.data)
          .map(({thumbnail, title, author, ups, date}) => ({
            thumbnail,
            title,
            author,
            ups,
            date,
          }));
        // console.error('dataPost', dataPost);
        console.log('pooooooooooooooooost', dataPost);
        setPosts(dataPost);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [token]);

  return [posts];
};
