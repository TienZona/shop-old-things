import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MenuTool.module.scss';
import classNames from 'classnames/bind';

import { useState, useMemo, useEffect } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, Select, ColorPicker, Input, InputNumber } from 'antd';
import UploadImage from '../UploadImage';
import { PhoneOutlined } from '@ant-design/icons';
import axios from 'axios';
const cx = classNames.bind(styles);

function MenuTool() {
    const [listImage, setListImage] = useState([]);
    const [isIconA, setIconA] = useState(false);
    const [colorHex, setColorHex] = useState('#1677ff');
    const [formatHex, setFormatHex] = useState('hex');
    const [open, setOpen] = useState(false);
    const [listProvince, setListProvince] = useState([]);
    const [listDistrict, setListDistricts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [brands, setBrands] = useState([]);

    // form value
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [statusValue, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [productName, setProductName] = useState('');

    const { TextArea } = Input;

    const status = [
        {
            value: 'new',
            label: 'Mới',
        },
        {
            value: 'old',
            label: 'Cũ',
        },
    ];

    useEffect(() => {
        // get api provinces
        axios
            .get(`https://provinces.open-api.vn/api/p/`)
            .then((res) => {
                let newList = res.data.map((item) => {
                    return {
                        value: item.code,
                        label: item.name,
                    };
                });
                setListProvince(newList);
            })
            .catch((err) => console.log(err));

        // get api category
        axios
            .get(`https://localhost:44352/api/Category/getAll`)
            .then((res) => {
                if (res.status === 200) {
                    const newList = res.data.map(function (item) {
                        return {
                            value: item.id,
                            label: item.name,
                        };
                    });

                    setCategorys(newList);
                }
            })
            .catch((err) => console.log(err));

        axios
            .get(`https://localhost:44352/api/Brand/getAll`)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    const newList = res.data.map(function (item) {
                        return {
                            value: item.id,
                            label: item.name,
                        };
                    });
                    console.log(newList);
                    setBrands(newList);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const getDistricts = (code) => {
        axios
            .get(`https://provinces.open-api.vn/api/p/${code}?depth=2`)
            .then((res) => {
                setListDistricts(
                    res.data.districts.map((districts) => {
                        return {
                            value: districts.code,
                            label: districts.name,
                        };
                    }),
                );
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(listDistrict);
    }, [listDistrict]);

    const submitForm = () => {
        console.log(productName);
        console.log(price);
        console.log(category);
    };

    const uploadImage = () => {
        // const data = new FormData();
        // data.append('file', listImage[0].originFileObj);
        // data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
        // data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_NAME);
        // axios
        //     .post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, data)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
    };

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
                onOk={() => submitForm()}
                onCancel={() => closeModal()}
                width={1200}
            >
                <div className={cx('box')}>
                    <div className={cx('upload')}>
                        <h1 className="text-center mb-5">
                            Hình ảnh sản phẩm <span>{'( Không quá 6 hình )'}</span>
                        </h1>
                        <UploadImage listImage={listImage} setListImage={setListImage} />
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
                                        placeholder="Chọn thể loại"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '')
                                                .toLowerCase()
                                                .localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        onChange={(e) => setCategory(e)}
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
                                            onChange={(e) => setProductName(e.target.value)}
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

                                    <Select
                                        showSearch
                                        style={{
                                            width: 300,
                                        }}
                                        placeholder="Tỉnh"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '    ')
                                                .toLowerCase()
                                                .localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        onSelect={(value) => {
                                            setListDistricts([]);
                                            getDistricts(value);
                                        }}
                                        options={listProvince}
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        {/* Địa chỉ - Tỉnh <span className="text-red-600">*</span> */}
                                    </h2>
                                    <Select
                                        showSearch
                                        style={{
                                            width: 300,
                                        }}
                                        placeholder="Huyện/Quận"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '    ')
                                                .toLowerCase()
                                                .localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        onSelect={(value) => getDistricts(value)}
                                        options={listDistrict}
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
                                        defaultValue="new"
                                        style={{
                                            width: 300,
                                        }}
                                        onChange={(e) => setStatus(e)}
                                        options={status}
                                    />
                                </div>
                                <div className={cx('item')}>
                                    <h2 className={cx('heading-2')}>
                                        Hãng <span className="text-red-600">*</span>
                                    </h2>
                                    <Select
                                        labelInValue="Chọn hãng"
                                        style={{
                                            width: 300,
                                        }}
                                        onChange={(e) => setBrand(e)}
                                        options={brands}
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
                                        onChange={(e) => setPrice(e)}
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
                                            onChange={(e) => setDescription(e.target.value)}
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
