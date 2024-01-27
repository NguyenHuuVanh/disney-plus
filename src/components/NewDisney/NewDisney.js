import classNames from 'classnames/bind';
import styles from './NewDisney.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../../feartures/movie/movieSlice';

const cx = classNames.bind(styles);

const NewDisney = () => {
    const movies = useSelector(selectNewDisney);
    return (
        <div className={cx('container')}>
            <h4>New to Disney+</h4>
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

export default NewDisney;
