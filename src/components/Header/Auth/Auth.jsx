import {urlAuth} from '../../../api/auth';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Text from '../../UI/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          delToken();
          throw new Error('401 статус');
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.log('err', err);
        setAuth({});
      });
  }, [token]);
  return (
    <div className={style.container}>
      {/* <LoginIcon className={style.svg} /> */}
      {auth.name ? (
        <>
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt='Аватар'
              onClick={() => setLogout(!logout)}
            />
          </button>
          {logout && (
            <Text
              As='button'
              color='white'
              onClick={delToken}
              className={style.logout}
            >
              Выйти
            </Text>
          )}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
