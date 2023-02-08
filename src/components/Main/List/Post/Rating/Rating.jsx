import style from './Rating.module.css';
import PropTypes from 'prop-types';
import Text from '../../../../UI/Text';

export const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Увеличить рейтинг' />
    <Text As='p' className={style.ups}>
      {ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
