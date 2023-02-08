import {useContext} from 'react';
import {postsContext} from '../../../context/postContext';
import {assignId} from '../../../utils/generateRandom';

import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const {posts} = useContext(postsContext);
  console.log(posts);

  // const postsData = [
  //   {
  //     thumbnail: '',
  //     title: 'title1',
  //     author: 'name',
  //     ups: 89,
  //     date: '2019-02-24T09:45:00.000Z',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'title2',
  //     author: 'name',
  //     ups: 10,
  //     date: '2022-02-24T09:45:00.000Z',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'title3',
  //     author: 'name',
  //     ups: 22344,
  //     date: '2010-01-24T09:45:00.000Z',
  //   },
  // ];
  return (
    <ul className={style.list}>
      {posts.map(assignId).map((item) => (
        <Post key={item.id} postData={item} />
      ))}
    </ul>
  );
};
