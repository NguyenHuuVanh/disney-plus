import classNames from 'classnames/bind';
import styles from './Viewers.module.scss';

import disney from '../../assets/images/viewers-disney.png';
import marvel from '../../assets/images/viewers-marvel.png';
import national from '../../assets/images/viewers-national.png';
import pixar from '../../assets/images/viewers-pixar.png';
import starwars from '../../assets/images/viewers-starwars.png';

import disneyMovie from '../../assets/videos/1564674844-disney.mp4';
import marvelMovie from '../../assets/videos/1564676115-marvel.mp4';
import nationalMovie from '../../assets/videos/1564676296-national-geographic.mp4';
import pixarMovie from '../../assets/videos/1564676714-pixar.mp4';
import starWarsMovie from '../../assets/videos/1608229455-star-wars.mp4';

const cx = classNames.bind(styles);

const Viewers = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('views_studio')}>
                <a className={cx('studio_link')} href=''>
                    <img src={disney} alt='' />
                </a>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={disneyMovie} type='video/mp4' />
                </video>
            </div>
            <div className={cx('views_studio')}>
                <a className={cx('studio_link')} href=''>
                    <img src={marvel} alt='' />
                </a>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={marvelMovie} type='video/mp4' />
                </video>
            </div>
            <div className={cx('views_studio')}>
                <a className={cx('studio_link')} href=''>
                    <img src={national} alt='' />
                </a>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={nationalMovie} type='video/mp4' />
                </video>
            </div>
            <div className={cx('views_studio')}>
                <a className={cx('studio_link')} href=''>
                    <img src={pixar} alt='' />
                </a>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={pixarMovie} type='video/mp4' />
                </video>
            </div>
            <div className={cx('views_studio')}>
                <a className={cx('studio_link')} href=''>
                    <img src={starwars} alt='' />
                </a>
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={starWarsMovie} type='video/mp4' />
                </video>
            </div>
        </div>
    );
};

export default Viewers;
