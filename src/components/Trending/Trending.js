import classNames from 'classnames/bind';
import styles from './Trending.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTrending } from '../../feartures/movie/movieSlice';

const cx = classNames.bind(styles);

const Trending = () => {
    const movies = useSelector(selectTrending);
    return (
        <div className={cx('container')}>
            <h4>Trending</h4>
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

export default Trending;
