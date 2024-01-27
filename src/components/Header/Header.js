import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Home, Logo, Movie, Original, Search, Series, WatchList } from '../../assets/logo';
import { auth, provider, db, storage } from '../services/firebase';
import { signInWithPopup } from 'firebase/auth';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../../feartures/user/userSlice';

const cx = classNames.bind(styles);

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    navigate('/');
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }),
        );
    };
    return (
        <nav className={cx('nav')}>
            <div className={cx('logo_main')}>
                <Logo className={cx('logo')} width='80px' />
            </div>
            {!userName ? (
                <button className={cx('login_btn')} onClick={handleAuth}>
                    Login
                </button>
            ) : (
                <div className={cx('nav_menu')}>
                    <ul className={cx('nav_menuItems')}>
                        <li className={cx('nav_menuItem')}>
                            <Home className={cx('nav_logo')} />
                            <a className={cx('nav_menuLink')} href=''>
                                Home
                            </a>
                        </li>
                        <li className={cx('nav_menuItem')}>
                            <Search className={cx('nav_logo')} />
                            <a className={cx('nav_menuLink')} href=''>
                                search
                            </a>
                        </li>
                        <li className={cx('nav_menuItem')}>
                            <WatchList className={cx('nav_logo')} />
                            <a className={cx('nav_menuLink')} href=''>
                                watchlist
                            </a>
                        </li>
                        <li className={cx('nav_menuItem')}>
                            <Original className={cx('nav_logo')} />
                            <a className={cx('nav_menuLink')} href=''>
                                originals
                            </a>
                        </li>
                        <li className={cx('nav_menuItem')}>
                            <Movie className={cx('nav_logo')} />
                            <a className={cx('nav_menuLink')} href=''>
                                movies
                            </a>
                        </li>
                        <li className={cx('nav_menuItem')}>
                            <Series className={cx('nav_logo')} />
                            <a className={cx('nav_menuLink')} href=''>
                                series
                            </a>
                        </li>
                    </ul>
                    <div className={cx('nav_menuUser')}>
                        <a className={cx('nav_menuProfile')} href=''>
                            <img src={userPhoto} alt={userName} />
                        </a>
                        <div className={cx('dropDown')}>
                            <span onClick={handleAuth}>Sign Out</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
