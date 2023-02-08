import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';

import notphoto from './img/notphoto.jpg';

export const Thumbnail = ({thumbnail}) => (
  <img
    className={style.img}
    src={/https?:\/\/.*\.(jpg|png)/.test(thumbnail) ? thumbnail : notphoto}
    alt=''
  />
);

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
};
