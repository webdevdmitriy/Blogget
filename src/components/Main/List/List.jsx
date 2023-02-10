import {useContext} from 'react';
import {postsContext} from '../../../context/postContext';
import {assignId} from '../../../utils/generateRandom';

import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const {posts} = useContext(postsContext);
  return (
    <ul className={style.list}>
      {posts.map(assignId).map((item) => (
        <Post key={item.id} postData={item} />
      ))}
    </ul>
  );
};
