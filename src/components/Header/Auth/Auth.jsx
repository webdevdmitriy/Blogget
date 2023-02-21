import {urlAuth} from '../../../api/auth';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Text from '../../UI/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import Preloader from '../../../UI/Preloader';

export const Auth = () => {
  // const {delToken} = useContext(tokenContext);
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const logOut = () => {
    // delToken();
    dispatch(deleteToken());
    clearAuth();
  };
  return (
    <div className={style.container}>
      {loading ? (
        <Preloader />
      ) : auth.name ? (
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
              onClick={logOut}
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
