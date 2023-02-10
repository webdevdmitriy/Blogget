import style from './FormComments.module.css';

export const FormComments = () => {
  console.log();
  return (
    <>
      <form className={style.form} action=''>
        <textarea style={style.textarea}></textarea>
        <button style={style.btn}>Отправить</button>
      </form>
    </>
  );
};
