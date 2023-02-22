// import {useContext} from 'react';
import {useBestPost} from '../../../hooks/useBestPosts';
import Preloader from '../../../UI/Preloader';
import {assignId} from '../../../utils/generateRandom';

import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts, loading] = useBestPost();
  console.log(loading);

  if (posts.length > 0) {
    return (
      <ul className={style.list}>
        {posts.map(assignId).map((item) => (
          <Post key={item.id} postData={item} />
        ))}
      </ul>
    );
  }
  return loading && <Preloader />;
};
