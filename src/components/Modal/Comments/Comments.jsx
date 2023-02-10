import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

// import formatDate from '../../../utils/formatDate';
import Text from '../../UI/Text';

export const Comments = ({comments}) => {
  console.log();
  return (
    <ul className={style.list}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <li className={style.item} key={comment.id}>
            <Text As='h2' className={style.author} size={20} tsize={22}></Text>
            <Text As='p' className={style.comment} size={14} tsize={18}></Text>
          </li>
        ))
      ) : (
        <Text As='p' className={style.comment} size={14} tsize={18}>
          Нет комментариев
        </Text>
      )}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
