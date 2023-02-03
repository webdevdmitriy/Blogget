import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'title1',
      author: 'name',
      ups: 89,
      date: '2019-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'title2',
      author: 'name',
      ups: 10,
      date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'title3',
      author: 'name',
      ups: 22344,
      date: '2010-01-24T09:45:00.000Z',
    },
  ];
  return (
    <ul className={style.list}>
      {postsData.map((item) => (
        <Post key={item.date} postData={item} />
      ))}
    </ul>
  );
};
