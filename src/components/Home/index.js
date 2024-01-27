import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, onSnapshot, doc, getDocs } from 'firebase/firestore';
import classNames from 'classnames/bind';
import { db } from '../services/firebase';

import { selectUserName } from '../../feartures/user/userSlice';
import { setMovies } from '../../feartures/movie/movieSlice';
import ImgSlider from '../ImgSlider/ImgSlider';
import styles from './Home.module.scss';
import Viewers from '../Viewers/Viewers';
import Recommends from '../Recommends/Recommends';
import NewDisney from '../NewDisney/NewDisney';
import Originals from '../Originals/Originals';
import Trending from '../Trending/Trending';

const cx = classNames.bind(styles);

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        const collectionRef = collection(db, 'movie');
        onSnapshot(collectionRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(recommends);
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                    default:
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                }),
            );
        });
    }, [userName]);
    return (
        <main className={cx('container')}>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </main>
    );
};

export default Home;
