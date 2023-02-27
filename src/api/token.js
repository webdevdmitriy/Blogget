import {useNavigate} from 'react-router';

export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('bearer') || '';
  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1)).get('access_token');
    setToken(token);
    navigate(`/`);
  }

  return token;
};
