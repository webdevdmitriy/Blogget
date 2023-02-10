import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const posts = data
          .map((item) => item.data.children)[0]
          .map((item) => item.data)[0];
        const comments = data
          .map((item) => item.data.children)[1]
          .map((item) => item.data);
        setCommentsData([posts, comments]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [commentsData];
};
