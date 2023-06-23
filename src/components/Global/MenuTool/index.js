import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuTool.module.scss';
import classNames from 'classnames/bind';

import { useState, useMemo } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, Select, ColorPicker, Input, InputNumber } from 'antd';
import UploadImage from '../UploadImage';
import { PhoneOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

function MenuTool() {
    const [isIconA, setIconA] = useState(false);
    const [colorHex, setColorHex] = useState('#1677ff');
    const [formatHex, setFormatHex] = useState('hex');
    const [open, setOpen] = useState(false);
    const { TextArea } = Input;
    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };
    const categorys = [
        {
            value: '1',
            label: 'Điện thoại di động',
        },
        {
            value: '2',
            label: 'Máy tính bảng',
        },
        {
            value: '3',
            label: 'Máy tính xách tay',
        },
        {
            value: '4',
            label: 'Đồng hồ thông minh',
        },
    ];
    const closeModal = () => {
        setIconA(false);
        setOpen(false);
    };
    const hexString = useMemo(() => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()), [colorHex]);
    return (
        <div className={cx('wrap')}>
            <div className={cx('btn', isIconA && 'btn-close')} onClick={() => setIconA(!isIconA)}>
                <FontAwesomeIcon icon={faPlus} className={cx('icon', isIconA ? 'icon-in' : 'icon-out')} />
            </div>
            <div className={cx('list')}>
                <button className={cx('item', isIconA ? 'fade-in' : 'fade-out')} onClick={() => setOpen(true)}>
                    Đăng tin
                </button>
            </div>
            <Modal
                title="Đăng tin"
                centered
                open={open}
                onOk={() => closeModal()}
                onCancel={() => closeModal()}
                width={1200}
            >
                <div className={cx('box')}>
                    <div className={cx('upload')}>
                        <h1 className="text-center mb-5">
                            Hình ảnh sản phẩm <span>{'( Không quá 6 hình )'}</span>
                        </h1>
                        <UploadImage />
                    </div>
                    <div className={cx('content')}>
                        <div className="grid grid-cols-2">
                            <div>
                                <h3 className={cx('heading-1')}>Thông tin sản phẩm</h3>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Thể loại <span className="text-red-600">*</span>
                                    </h2>
                                    <Select
                                        showSearch
                                        style={{
                                            width: 300,
                                        }}
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '')
                                                .toLowerCase()
                                                .localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={categorys}
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Tên sản phẩm <span className="text-red-600">*</span>
                                    </h2>
                                    <div style={{ width: '300px' }}>
                                        <TextArea
                                            showCount
                                            maxLength={100}
                                            style={{
                                                height: 60,
                                                marginBottom: 24,
                                            }}
                                            onChange={onChange}
                                            placeholder="..."
                                        />
                                    </div>
                                </div>
                                <h3 className={cx('heading-1')}>Thông tin người bán</h3>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Số điện thoại <span className="text-red-600">*</span>
                                    </h2>
                                    <Input
                                        type="tel"
                                        style={{ width: '300px' }}
                                        placeholder="..."
                                        prefix={<PhoneOutlined />}
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Địa chỉ <span className="text-red-600">*</span>
                                    </h2>
                                    <Input
                                        type="tel"
                                        style={{ width: '300px' }}
                                        placeholder="..."
                                        prefix={<PhoneOutlined />}
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className={cx('heading-1')}>Thông tin chi tiết</h1>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Tình trạng <span className="text-red-600">*</span>
                                    </h2>
                                    <Select
                                        defaultValue="lucy"
                                        style={{
                                            width: 300,
                                        }}
                                        options={categorys}
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Hãng <span className="text-red-600">*</span>
                                    </h2>
                                    <Select
                                        defaultValue="lucy"
                                        style={{
                                            width: 300,
                                        }}
                                        options={categorys}
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Màu sắc<span className="text-red-600">*</span>
                                    </h2>
                                    <ColorPicker
                                        format={formatHex}
                                        value={colorHex}
                                        onChange={setColorHex}
                                        onFormatChange={setFormatHex}
                                    />
                                    <span className="px-3">{hexString}</span>
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Giá bán <span className="text-red-600">*</span>
                                    </h2>
                                    <InputNumber
                                        style={{
                                            width: '300px',
                                        }}
                                        prefix="đ"
                                        suffix="Coin"
                                        type="number"
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Mô tả <span className="text-red-600">*</span>
                                    </h2>
                                    <div style={{ width: '300px' }}>
                                        <TextArea
                                            showCount
                                            maxLength={1000}
                                            style={{
                                                height: 100,
                                                marginBottom: 24,
                                            }}
                                            onChange={onChange}
                                            placeholder="..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default MenuTool;
