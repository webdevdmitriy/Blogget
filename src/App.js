import Header from './components/Header';
import './App.css';
import Main from './components/Main';

import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');
  console.log('token', token);

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main />
    </>
  );
}

export default App;
