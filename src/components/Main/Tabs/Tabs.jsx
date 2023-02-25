import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandom';
import {useState} from 'react';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {useEffect} from 'react';
import {debounceRaf} from '../../../utils/debounce';
import Text from '../../UI/Text';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: TopIcon, link: 'top'},
  {value: 'Лучшие', Icon: BestIcon, link: 'best'},
  {value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [currentMenuItem, setCurrentMenuItem] = useState(LIST[0].value);
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    handleResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);
  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wwapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            {currentMenuItem}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          {LIST.map(({value, id, Icon, link}) => (
            <li className={style.item} key={id}>
              <Text
                As='button'
                medium
                className={style.btn}
                onClick={() => {
                  setCurrentMenuItem(value);
                  navigate(`/category/${link}`);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
