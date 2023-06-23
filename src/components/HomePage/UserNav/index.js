import styles from './UserNav.module.scss';
import classNames from 'classnames/bind';
import { Drawer } from 'antd';
import { useState } from 'react';
import UserHead from '../UserHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faClipboardList,
    faHeart,
    faRightFromBracket,
    faStar,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function UserNav() {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className={cx('wrap')}>
            <div className={cx('user')} onClick={() => setOpen(true)}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&usqp=CAU"
                    alt=""
                />
            </div>
            <Drawer closeIcon={null} extra={<UserHead />} placement="right" onClose={onClose} open={open}>
                <div className={cx('body')}>
                    <div className={cx('box')}>
                        <h1 className={cx('heading')}>Quản lí đơn hàng</h1>
                        <div className={cx('item')}>
                            <div className={cx('icon')} style={{ backgroundColor: '#2192FF' }}>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                            <span>Đơn mua</span>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')} style={{ backgroundColor: '#38E54D' }}>
                                <FontAwesomeIcon icon={faClipboardList} />
                            </div>
                            <span>Đơn bán</span>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <h1 className={cx('heading')}>Tiện ích</h1>
                        <div className={cx('item')}>
                            <div className={cx('icon')} style={{ backgroundColor: '#FC2947' }}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <span>Tin đã lưu</span>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')} style={{ backgroundColor: '#FFD93D' }}>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <span>Đánh giá từ tôi</span>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')} style={{ backgroundColor: '#FFB84C' }}>
                                <FontAwesomeIcon icon={faWallet} />
                            </div>
                            <span>Nạp ví</span>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <h1 className={cx('heading')}>Khác</h1>
                        <div className={cx('item')}>
                            <div className={cx('icon')} style={{ backgroundColor: '#2CD3E1' }}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </div>
                            <span>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default UserNav;
