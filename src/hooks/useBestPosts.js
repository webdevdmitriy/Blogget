import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const useBestPost = () => {
  const posts = useSelector((state) => state.postsReducer.data);
  const token = useSelector((state) => state.tokenReducer.token);
  const loading = useSelector((state) => state.postsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts, loading];
};
