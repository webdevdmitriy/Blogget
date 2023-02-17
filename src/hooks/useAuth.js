import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {URL_API} from '../api/const';
import {deleteToken} from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});

  // const {token, delToken} = useContext(tokenContext);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
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
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const cleatAuth = () => setAuth({});

  return [auth, cleatAuth];
};
