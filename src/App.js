import Header from './components/Header';
import './App.css';
import Main from './components/Main';

import {AuthContextProvider} from './context/authContext';
import {useDispatch} from 'react-redux';

import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  );
}

export default App;
