import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const useCommentsData = (id) => {
  const [commentsData, setCommentsData] = useState([]);

  const token = useSelector((state) => state.tokenReducer.token);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setCommentsData([
          data[0].data.children[0].data,
          data[1].data.children.filter((item) => item.kind === 't1'),
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [commentsData];
};
