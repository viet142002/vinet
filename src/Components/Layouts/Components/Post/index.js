import classNames from 'classnames/bind';
import style from './Post.module.scss';

const cx = classNames.bind(style);

function Post() {
  return (
    <div className={cx('wrapper')}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nulla
        numquam porro rerum? Consequatur asperiores in, modi doloremque rem,
        soluta possimus odit vel vero vitae quod velit, animi debitis omnis.
      </p>
    </div>
  );
}

export default Post;
