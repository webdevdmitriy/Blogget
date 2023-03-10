import style from './Post.module.css';

import PropTypes from 'prop-types';

import Content from './Content';
import Rating from './Rating';
import Thumbnail from './Thumbnail';
import DateTime from './DateTime';
import DeleteButton from './DeleteButton';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    created_utc: date,
    thumbnail,
    selftext: markdown,
    id: postId,
  } = postData;

  return (
    <li className={style.post}>
      <Content
        title={title}
        author={author}
        markdown={markdown}
        postId={postId}
      />
      <Thumbnail thumbnail={thumbnail} />
      <Rating ups={ups} />
      <DateTime date={date} />
      <DeleteButton />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
  markdown: PropTypes.string,
};
