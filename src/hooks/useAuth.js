import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router';

import {authLogout, authRequestAsync} from '../store/auth/action';

export const useAuth = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authReducer.data);
  const token = useSelector((state) => state.tokenReducer.token);
  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
    navigate('./');
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
