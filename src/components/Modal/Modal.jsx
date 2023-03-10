import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComments from './FormComments';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const overlayRef = useRef(null);

  const {id, page} = useParams();
  const navigate = useNavigate();

  const [comments, post, status] = useCommentsData(id);
  const {author, title, selftext: markdown} = post;
  console.log(post);
  console.log(status);
  console.log(comments);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      navigate(`/categore/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);
  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && 'Загрузка....'}
        {status === 'error' && 'Ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {markdown}
              </Markdown>
            </div>
            <p className={style.author}>{author}</p>
            <FormComments />

            {comments.length ? (
              <Comments comments={comments} />
            ) : (
              <p>Загрузка...</p>
            )}

            <button
              className={style.close}
              onClick={() => {
                navigate(`/category/${page}`);
              }}
            >
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
