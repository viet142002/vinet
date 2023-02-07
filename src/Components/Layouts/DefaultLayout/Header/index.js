import classNames from 'classnames/bind';
//import { useContext } from 'react';
import style from './Header.module.scss';
//import { ScrollContext } from '~/ScrollContext';

const cx = classNames.bind(style);

function Header() {
  //const handleScroll = useContext(ScrollContext);
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('item')}>Logo</h2>
      <span className={cx('item')}>chuong ne</span>
    </div>
  );
}

export default Header;
