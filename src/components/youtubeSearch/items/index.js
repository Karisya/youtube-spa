import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Typography, Image } from 'antd'
import { setSelectedVideo } from '../../../redux/slices/selectedVideoClice';


const VideoItem = ({ video }) => {

    const dispatch = useDispatch()

    const click = useSelector(state => state.click)

    const handleSelect = () => {
        dispatch(setSelectedVideo(video))
    }

    return (
        <Card onClick={handleSelect} >
            <div className={click === 'row' ? 'video-item row' : 'video-item column'}>
                <Image className='item__image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <div className='item__content'>
                    <Typography className='item__header '>{video.snippet.title}</Typography>
                    <Typography className='item__name '>{video.snippet.channelTitle}</Typography>
                </div>
            </div>
        </Card>
    )
};

export default VideoItem;