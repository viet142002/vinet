import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('item')}>x</span>
      <span className={cx('item')}>x</span>
      <span className={cx('item')}>x</span>
      <span className={cx('item')}>x</span>
      <span className={cx('item')}>x</span>
    </div>
  );
}

export default Footer;
