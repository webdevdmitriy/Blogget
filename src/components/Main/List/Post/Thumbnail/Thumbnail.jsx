import style from './Thumbnail.module.css';

import notphoto from './img/notphoto.jpg';

export const Thumbnail = () => {
  console.log(style);
  return <img className={style.img} src={notphoto} alt='' />;
};
