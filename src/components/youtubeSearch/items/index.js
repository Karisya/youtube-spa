import React from 'react';
import { setSelectedVideo } from '../../../redux/slices/selectedVideoClice';
import { useDispatch } from 'react-redux'
import { Space, Card, Typography, Image } from 'antd'


const VideoItem = ({ video }) => {

    const dispatch = useDispatch()
    const handleSelect = () => {
        dispatch(setSelectedVideo(video))
    }

    return (
        <Card onClick={handleSelect} className=' video-item item'>
            <Image className='item__image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <Space className='item__content'>
                <Typography className='item__header '>{video.snippet.title}</Typography>
            </Space>
        </Card>
    )
};

export default VideoItem;