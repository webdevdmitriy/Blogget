import {useRef} from 'react';
import style from './FormComments.module.css';

export const FormComments = () => {
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };
  return (
    <>
      <form className={style.form} action=''>
        <textarea className={style.textarea} ref={ref}></textarea>
        <button className={style.btn} onClick={handleSubmit}>
          Отправить
        </button>
      </form>
    </>
  );
};
