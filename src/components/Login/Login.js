import classNames from 'classnames/bind';
import styles from './login.module.scss';
import { CatLogoOne, LogoTwo } from '../../assets/logo';
import images from '../../assets/images';

const cx = classNames.bind(styles);

const Login = () => {
    return (
        <section className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('logos')}>
                    <CatLogoOne className={cx('cat_logoOne')} />
                </div>
                <button className={cx('btn_signUp')}>GET ALL THERE</button>
                <p className={cx('discription')}>
                    Get Premier Access to Raya and the Last Dragon for an additional free with a Disney+ subcription. As
                    of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.
                </p>
                <LogoTwo className={cx('cat_logoTwo')} src={images.logoTwo} />
                <div className={cx('bg-image')}></div>
            </div>
        </section>
    );
};

export default Login;
