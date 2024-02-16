import VideoDetail from "../videoDetail"
import VideoItem from "../items";
import { Space, Card, Typography, Image } from 'antd'
import { useSelector } from 'react-redux'

export const YoutubePage = () => {

    const videos = useSelector(state => state.videos)
    const term = useSelector(state => state.term)
    const click = useSelector(state => state.click)

    const renderedVideos = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId} video={video}
        />
    });

    return (
        <>
            <Typography>Результаты по запросу " {term} "</Typography>
            <Space className="youtube-videos">
                <VideoDetail />
                <Space className={click === 'row' ? 'row-list' : "column-list"} >{renderedVideos}</Space>
            </Space>
        </>
    )
}
