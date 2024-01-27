import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Details.module.scss';
import { db } from '../services/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

import playIconBlack from '../../assets/images/play-icon-black.png';
import playIconWhite from '../../assets/images/play-icon-white.png';
import iconGroup from '../../assets/images/group-icon.png';

const cx = classNames.bind(styles);

const Details = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    console.log('🚀 ~ file: Details.js:18 ~ Details ~ detailData:', detailData);

    useEffect(() => {
        const docCollection = collection(db, 'movie');
        const docRef = doc(docCollection, id);
        const docData = getDoc(docRef);
        docData
            .then((data) => {
                if (data.exists()) {
                    setDetailData(data.data());
                } else {
                    console.log('no such document in firebase 🔥');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className={cx('container')}>
            <div className={cx('background')}>
                <img className={cx('bg-img')} src={detailData.backgroundImg} alt={detailData.title} />
            </div>

            <div className={cx('img-title')}>
                <img src={detailData.titleImg} alt={detailData.title} />
            </div>
            <div className={cx('content')}>
                <div className={cx('controls')}>
                    <button className={cx('player')}>
                        <img src={playIconBlack} alt='' />
                        <span>play</span>
                    </button>
                    <button className={cx('trailer')}>
                        <img src={playIconWhite} alt='' />
                        <span>Trailer</span>
                    </button>
                    <div className={cx('addList')}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={cx('groupWatch')}>
                        <div>
                            <img src={iconGroup} alt='' />
                        </div>
                    </div>
                </div>
                <div className={cx('subTitle')}>{detailData.subTitle}</div>
                <div className={cx('description')}>{detailData.description}</div>
            </div>
        </div>
    );
};

export default Details;
