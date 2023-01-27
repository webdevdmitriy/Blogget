import style from './Content.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../UI/Text';

export const Content = ({title, author}) => {
  console.log(style);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size={18} tsize={24} className={style.linkPost} href='#'>
          {title}
        </Text>
      </Text>
      <Text
        as='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#'
      >
        {author}
      </Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
