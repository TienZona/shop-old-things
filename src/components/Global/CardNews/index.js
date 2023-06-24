import classNames from 'classnames/bind';
import styles from './CardNews.module.scss';
import { useState } from 'react';

import { NumberVND } from '~/functions';
import img from '~/assets/images/iphone-14.jpg';
import chatIcon from '~/assets/icon/messenger.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart as faHeartSolid, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Modal, Tooltip, Image } from 'antd';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardNews() {
    const [isHeart, setIsHeart] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
    };

    return (
        <div className={cx('wrap')}>
            <img src={img} alt="" />
            <div className={cx('icon-heart')}>
                {isHeart ? (
                    <FontAwesomeIcon icon={faHeartSolid} onClick={() => setIsHeart(false)} />
                ) : (
                    <FontAwesomeIcon icon={faHeartRegular} onClick={() => setIsHeart(true)} />
                )}
            </div>
            <div className={cx('list-icon')}>
                <Tooltip placement="top" title={'Quick view'}>
                    <FontAwesomeIcon className={cx('icon')} icon={faEye} onClick={(e) => showModal(e)} />
                </Tooltip>
            </div>
            <div className={cx('content')}>
                <h2>Tên sản phẩm</h2>
                <h3>{NumberVND(30000000)}đ</h3>
                <div className={cx('location')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                    <p className="px-3">Cần Thơ</p>
                </div>
            </div>
            <Modal
                title="Chi Tiết Sản Phẩm"
                width={800}
                open={isModalOpen}
                footer={null}
                onCancel={() => setIsModalOpen(false)}
            >
                <div className={cx('body')}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className={cx('img')}>
                            <Image width={300} src={img} />
                        </div>
                        <div className={cx('content')}>
                            <h1>Tên sản phẩm</h1>
                            <div className="px-10">
                                <div className="flex justify-between">
                                    <h2>
                                        <b>Loại: </b>Điện thoại
                                    </h2>
                                    <h2>
                                        <b>Giá:</b> <span className="color">30.000.000đ</span>
                                    </h2>
                                </div>
                                <p>
                                    <b>Địa chỉ: </b> Cần Thơ
                                </p>
                                <p>
                                    <b>SĐT: </b> 09787873434
                                </p>
                                <div className="flex justify-center p-6 mt-5">
                                    <button className={cx('send')}>
                                        Nhắn tin <img className="mx-3" width={24} src={chatIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <b>Mô tả</b>
                        <p className={cx('description')}>
                            Cóc IPhone Cổng Type-C 20w Zin Store Theo Máy (Cóc To Chân Dẹp) Sạc nhanh Apple iPhone 20W
                            Type-C PD chính hãng tiết kiệm tối đa thời gian sạc điện thoại Nhanh chóng, tiết kiệm tối đa
                            thời gian là những gì mà người dùng iPhone mong đợi ở chiếc sạc pin của mình. Để có thể làm
                            được điều đó thì việc sử dụng củ sạc nhanh Apple iPhone 20W Type-C PD chính hãng là điều cần
                            thiết mà bạn không nên bỏ qua.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CardNews;
