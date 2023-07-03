import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

import slide1 from '~/assets/images/slide-2.jpg';
import slide2 from '~/assets/images/slide-4.jpg';
import slide3 from '~/assets/images/slide-6.jpg';
import slide4 from '~/assets/images/slide-5.jpg';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Slider() {
    const [slide, setSlide] = useState([slide1, slide2, slide3, slide4]);
    const [active, setActive] = useState(slide[0]);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (timer === 4) {
            setTimer(0);
        }

        setActive(slide[timer]);
    }, [slide, timer]);

    return (
        <div className={cx('wrap')}>
            <img className={cx('img')} src={active} alt="" />
            <div className={cx('list')}>
                {slide.map((item, index) => (
                    <div key={index} className={cx('item', timer === index && 'active')}></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
