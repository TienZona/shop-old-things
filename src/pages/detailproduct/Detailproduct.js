import React, { useEffect, useRef, useState } from 'react';
import '../detailproduct/Detailproduct.css';
import {
    StarOutlined,
    MessageOutlined,
    HeartOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    WechatOutlined,
    TagOutlined,
    DatabaseOutlined,
    FileProtectOutlined,
    HddOutlined,
    DesktopOutlined,
    GlobalOutlined,
    FileTextOutlined,
    ShopOutlined,
    HeartFilled,
} from '@ant-design/icons';

const Detailproduct = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [news, setNews] = useState(false);

    const toggle = () => {
        setNews(!news);
    };
    const images = [
        'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-1-1.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-bac-1.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-bac-2.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-bac-3.jpg',
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{}}>
            <div className="card-wrapper">
                <div className="card">
                    {/* left */}
                    <div className="content">
                        <div className="img-display">
                            <div className="img-showcase">
                                <img src={images[selectedImg]} />
                            </div>
                        </div>
                        <div className="img-select">
                            <div className="img-item">
                                <a href="#" data-id="1" onClick={(e) => setSelectedImg(0)}>
                                    <img src={images[0]} />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="2" onClick={(e) => setSelectedImg(1)}>
                                    <img src={images[1]} />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="3" onClick={(e) => setSelectedImg(2)}>
                                    <img src={images[2]} />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="4" onClick={(e) => setSelectedImg(3)}>
                                    <img src={images[3]} />
                                </a>
                            </div>
                        </div>
                        <div style={{ height: 'auto', margin: '.5rem 1rem' }}>
                            <h1 className="title-product">Điện thoại iPhone 14 Pro Max 128GB</h1>
                            <div className="product-price2">
                                <div className="price">23.000.000 d</div>
                                <div className="saveNews" onClick={() => toggle(news)}>
                                    {news ? 'Lưu tin' : 'Đã lưu'} {news ? <HeartOutlined /> : <HeartFilled />}
                                </div>
                            </div>
                            <div className="product-description">
                                <div className="description">
                                    <TagOutlined style={{ marginRight: '0.5rem' }} /> Hãng:
                                </div>
                                <div className="description">
                                    <TagOutlined style={{ marginRight: '0.5rem' }} /> Dòng máy:
                                </div>
                                <div className="description">
                                    <DatabaseOutlined style={{ marginRight: '0.5rem' }} /> Tình trạng:
                                </div>
                                <div className="description">
                                    <FileProtectOutlined style={{ marginRight: '0.5rem' }} /> Chính sách bảo:
                                </div>
                                <div className="description">
                                    <HddOutlined style={{ marginRight: '0.5rem' }} /> Dung lượng:
                                </div>
                                <div className="description">
                                    <DesktopOutlined style={{ marginRight: '0.5rem' }} /> Kích cỡ màng hình:
                                </div>
                                <div className="description">
                                    <GlobalOutlined style={{ marginRight: '0.5rem' }} /> Xuất sứ:
                                </div>
                                <div className="description">
                                    <FileTextOutlined style={{ marginRight: '0.5rem' }} /> Thông tin sử dụng:
                                </div>
                            </div>
                            <div className="location">
                                <strong>Khu vực</strong>
                                <div className="address">
                                    <InfoCircleOutlined />{' '}
                                    <span>855/9, Hẻm 855 Quang Trung, Phường 12, Quận Gò Vấp, Tp Hồ Chí Minh</span>
                                </div>
                            </div>
                            <div className="IntersectBox ">
                                <strong>Chia sẻ bài đăng này cho bạn bè</strong>
                                <div className="social-link">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJE8vBPFmLcAKfgR4-l3mPZ0LRrkUfSvhG1w&usqp=CAU" />
                                    </a>
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Km32bHnWZYdPZhMR3YPEd3EiilGH3WQhdQ&usqp=CAU" />
                                    </a>
                                    <a href="#">
                                        <img src="data:image/png;base64,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" />
                                    </a>
                                </div>
                            </div>
                            <div className="report">
                                <em>
                                    Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo cáo tin đăng hoặc liên
                                    hệ CSKH để được giúp đỡ
                                </em>
                                <div className="report-btn">
                                    <button className="report-btn1">Báo tin không hợp lệ</button>
                                    <button className="report-btn2">Báo tin đã bán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="site-bar">
                        <div className="card-profile">
                            <div className="profile">
                                <div className="test">
                                    <div className="profile-title">
                                        <div className="avatar">
                                            <img src="data:image/png;base64,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" />
                                        </div>
                                        <div className="name">
                                            <div className="p-name">Jaywon</div>
                                            <div>
                                                <button className="btn">Xem cửa hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="partner">
                                    <div className="partner-name">
                                        <span>Đối tác</span> <h3>Là đối tác của chợ tốt</h3>
                                    </div>
                                    <div className="partner-description">
                                        Cam kết hàng đúng mô tả, bảo hành ít nhất 3 tháng, hỗ trợ đổi trả.{' '}
                                    </div>
                                </div>
                                <div className="btn-buy">mua ngay - đặt cọc</div>
                                <div className="contact">
                                    <div className="contact-wrapper">
                                        <div className="content">
                                            <span>
                                                <WechatOutlined />
                                            </span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span>chat với người bán</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact">
                                    <div className="contact-wrapper">
                                        <div className="content">
                                            <span>
                                                <PhoneOutlined />
                                            </span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span>0794994999</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="card-top">
                    <h4>Tin rao khác của SHOP</h4>
                    <div className="all">
                        <span>{'Xem tất cả >'}</span>
                    </div>
                </div>

                <div style={{ boxSizing: 'border-box' }}>
                    <div className="card-bot">
                        <div className="card-rowContent">
                            <div className="card-item">
                                {/* list item */}
                                <div className="item">
                                    <div className="item-img">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg" />
                                    </div>
                                    <div className="item-caption">
                                        <div className="item-title">Điện thoại iPhone 11 64GB</div>
                                        <div className="item-price">10.600.000 d</div>
                                    </div>
                                    <div className="item-footer">
                                        <div>
                                            <ShopOutlined />
                                        </div>
                                        <div className="item-time">
                                            <span>12 phút trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-img">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg" />
                                    </div>
                                    <div className="item-caption">
                                        <div className="item-title">Điện thoại iPhone 11 64GB</div>
                                        <div className="item-price">10.600.000 d</div>
                                    </div>
                                    <div className="item-footer">
                                        <div>
                                            <ShopOutlined />
                                        </div>
                                        <div className="item-time">
                                            <span>12 phút trước</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-img">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg" />
                                    </div>
                                    <div className="item-caption">
                                        <div className="item-title">Điện thoại iPhone 11 64GB</div>
                                        <div className="item-price">10.600.000 d</div>
                                    </div>
                                    <div className="item-footer">
                                        <div>
                                            <ShopOutlined />
                                        </div>
                                        <div className="item-time">
                                            <span>12 phút trước</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailproduct;
