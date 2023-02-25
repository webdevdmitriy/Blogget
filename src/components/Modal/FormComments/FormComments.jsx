import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

import style from './FormComments.module.css';

export const FormComments = () => {
  const value = useSelector((state) => state.commentReducer.comment);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  const handleChange = (e) => {
    // setValue(e.target.value);
    // console.log(value);
    dispatch(updateComment(e.target.value));
  };
  return (
    <>
      <form className={style.form} action=''>
        <textarea
          className={style.textarea}
          onChange={handleChange}
          value={value}
        ></textarea>
        <button className={style.btn} onClick={handleSubmit}>
          Отправить
        </button>
      </form>
    </>
  );
};
