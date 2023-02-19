import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const useBestPost = () => {
  const [posts, setPosts] = useState([]);
  // const {token} = useContext(tokenContext);
  const token = useSelector((state) => state.tokenReducer.token);
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
          .map(
            ({
              thumbnail,
              title,
              author,
              ups,
              created_utc: date,
              selftext,
              id: postId,
            }) => ({
              thumbnail,
              title,
              author,
              ups,
              date,
              selftext,
              postId,
            })
          );

        setPosts(dataPost);
      })
      .catch((err) => {});
  }, [token]);

  return [posts];
};
