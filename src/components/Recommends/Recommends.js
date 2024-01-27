import classNames from 'classnames/bind';
import styles from './Recommends.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecommend } from '../../feartures/movie/movieSlice';

const cx = classNames.bind(styles);

const Recommends = () => {
    const movies = useSelector(selectRecommend);
    console.log('🚀 ~ file: Recommends.js:11 ~ Recommends ~ movies:', movies);
    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>Recommended for you</h4>
            <div className={cx('content')}>
                {movies &&
                    movies.map((movie, key) => (
                        <div className={cx('wrap')} key={key}>
                            {movie.id}
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Recommends;
