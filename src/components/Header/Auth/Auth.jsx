import {urlAuth} from '../../../api/auth';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Text from '../../UI/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {useState, useContext} from 'react';
import {authContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';

export const Auth = () => {
  // const {delToken} = useContext(tokenContext);
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const logOut = () => {
    // delToken();
    dispatch(deleteToken());
    clearAuth();
  };

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
