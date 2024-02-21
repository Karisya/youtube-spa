import React from "react";
import { useSelector } from 'react-redux'
import { Card, Typography } from 'antd'

const VideoDetail = () => {

    const video = useSelector(state => state.selectedVideo)

    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
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