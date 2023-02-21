import ClipLoader from 'react-spinners/ClipLoader';
import style from './Preloader.module.css';

export const Preloader = () => (
  <ClipLoader className={style.spinner} color='#cc6633' size={30} />
);
