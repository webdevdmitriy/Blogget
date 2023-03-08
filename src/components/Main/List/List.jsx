// import {useContext} from 'react';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
// import {useBestPost} from '../../../hooks/useBestPosts';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {postsSlice} from '../../../store/posts/postsSlice';
import Preloader from '../../../UI/Preloader';
import {assignId} from '../../../utils/generateRandom';

import style from './List.module.css';
import Post from './Post';

export const List = () => {
  // const [posts, loading] = useBestPost();
  const posts = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);
  const token = useSelector((state) => state.tokenReducer.token);

  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsSlice.actions.changePage(page));
    dispatch(postsRequestAsync(page));
  }, [page, token]);

  useEffect(() => {
    if (!posts.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      }
    );
    observer.observe(endList.current);
  }, [endList.current]);

  if (posts.length > 0) {
    return (
      <>
        <ul className={style.list}>
          {posts.map(assignId).map((item) => (
            <Post key={item.id} postData={item.data} />
          ))}
          <li ref={endList} className={style.end} />
        </ul>
        <Outlet />;
      </>
    );
  }
  return loading && <Preloader />;
};
