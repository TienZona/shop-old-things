import classNames from 'classnames/bind';
import styles from './UploadVideo.module.scss';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Modal, Upload, message, Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function UploadVideo() {
    const uploadVideo = (file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'qbkvgvkb');
        data.append('cloud_name', 'drtmlglka');

        postVideo(data);
    };

    const postVideo = (data) => {
        axios
            .post(`https://api.cloudinary.com/v1_1/drtmlglka/video/upload`, data)
            .then((res) => {
                const newImg = {
                    id: 0,
                    url: res.data.url,
                    isCover: false,
                    isVideo: false,
                    isDeleted: false,
                    isNewlyAdded: false,
                };
                console.log(res);
            })
            .catch((err) => console.log(err));
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
    return (
        <div className={cx('wrap')}>
            <Upload listType="picture-card" onChange={(file) => uploadVideo(file.originFileObj)}>
                {uploadButton}
            </Upload>
        </div>
    );
}

export default UploadVideo;
