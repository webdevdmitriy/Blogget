import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

// import formatDate from '../../../utils/formatDate';
import Text from '../../UI/Text';
import formatDate from '../../../utils/formatDate';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length > 0 ? (
      comments
        .map((item) => item.data)
        .map(({id, author, body, created}) => {
          console.log();
          return (
            <li className={style.item} key={id}>
              <Text As='h2' className={style.author} size={20} tsize={22}>
                {author}
              </Text>
              <Text As='p' className={style.comment} size={14} tsize={18}>
                {body}
              </Text>
              <Text As='time' className={style.date} size={14} tsize={18}>
                {formatDate(created)}
              </Text>
            </li>
          );
        })
    ) : (
      <Text As='p' className={style.comment} size={14} tsize={18}>
        Нет комментариев
      </Text>
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
