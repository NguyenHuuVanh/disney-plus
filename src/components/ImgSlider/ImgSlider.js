import Slider from 'react-slick';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ImgSlider.module.scss';

import sliderBadag from '../../assets/images/slider-badag.jpg';
import sliderBadaging from '../../assets/images/slider-badging.jpg';
import sliderScale from '../../assets/images/slider-scale.jpg';
import sliderScales from '../../assets/images/slider-scales.jpg';

const cx = classNames.bind(styles);

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };
    return (
        <Slider className={cx('carousel')} {...settings}>
            <div className={cx('carousel_items')}>
                <a className={cx('casousel_link')} href=''>
                    <img className={cx('carousel_img')} src={sliderBadag} alt='' />
                </a>
            </div>
            <div className={cx('carousel_items')}>
                <a className={cx('casousel_link')} href=''>
                    <img className={cx('carousel_img')} src={sliderBadaging} alt='' />
                </a>
            </div>
            <div className={cx('carousel_items')}>
                <a className={cx('casousel_link')} href=''>
                    <img className={cx('carousel_img')} src={sliderScale} alt='' />
                </a>
            </div>
            <div className={cx('carousel_items')}>
                <a className={cx('casousel_link')} href=''>
                    <img className={cx('carousel_img')} src={sliderScales} alt='' />
                </a>
            </div>
        </Slider>
    );
};

export default ImgSlider;
