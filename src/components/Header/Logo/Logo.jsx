import style from './Logo.module.css';

import {ReactComponent as LogoIcon} from './img/logo.svg';

export const Logo = () => (
  <a className={style.link} href='/'>
    <LogoIcon className={style.logo} />
  </a>
);
