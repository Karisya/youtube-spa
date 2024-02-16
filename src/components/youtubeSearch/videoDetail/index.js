import React from "react";
import { useSelector } from 'react-redux'
import { Space, Card, Typography, Image } from 'antd'

const VideoDetail = () => {

    const video = useSelector(state => state.selectedVideo)

    if (!video) {
        return <div>

        </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log('video:', video);
    return (
        <div className="video">
            <div className="ui embed">
                <iframe src={videoSrc} allowFullScreen title="Video player" />
            </div>
            <Card className="ui segment">
                <Typography className="ui header">{video.snippet.title}</Typography>
                <p>{video.snippet.description}</p>
            </Card>
        </div>
    );
};

export default VideoDetail;