import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Post from '~/Components/Layouts/Components/Post';

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Home;
