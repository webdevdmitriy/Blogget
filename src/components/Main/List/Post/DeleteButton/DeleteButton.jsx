import style from './DeleteButton.module.css';
import deleteImg from './img/delete.svg';

export const DeleteButton = () => {
  console.log(style);
  return (
    <button className={style.delete}>
      <img src={deleteImg} alt='' />
    </button>
  );
};
