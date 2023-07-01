import classNames from 'classnames/bind';
import styles from './UploadImage.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const cx = classNames.bind(styles);

function UploadImage({ listImage, setListImage }) {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => {
        uploadImage(newFileList[newFileList.length - 1].originFileObj);
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const uploadImage = (file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'qbkvgvkb');
        data.append('cloud_name', 'drtmlglka');

        postImage();
    };

    const postImage = (data) => {
        axios
            .post(`https://api.cloudinary.com/v1_1/drtmlglka/image/upload`, data)
            .then((res) => {
                const newImg = {
                    id: 0,
                    url: res.data.url,
                    isCover: false,
                    isVideo: false,
                    isDeleted: false,
                    isNewlyAdded: false,
                };
                setListImage((prev) => [...prev, newImg]);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={cx('wrap')}>
            <Upload
                listType="picture-card"
                fileList={listImage}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={() => false}
            >
                {listImage.length >= 6 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
}

export default UploadImage;
