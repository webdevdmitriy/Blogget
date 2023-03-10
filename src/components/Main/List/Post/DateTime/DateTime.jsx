import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

import style from './DateTime.module.css';

export const DateTime = ({date}) => (
  <time className={style.date} dateTime={formatDate(date)}>
    {formatDate(date)}
  </time>
);

DateTime.propTypes = {
  date: PropTypes.number,
};
