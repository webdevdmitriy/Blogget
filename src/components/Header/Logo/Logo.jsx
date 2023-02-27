import style from './Logo.module.css';

import {ReactComponent as LogoIcon} from './img/logo.svg';
import {Link} from 'react-router-dom';

export const Logo = () => (
  <Link className={style.link} to='/'>
    <LogoIcon className={style.logo} />
  </Link>
);
