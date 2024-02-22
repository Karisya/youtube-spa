import { useSelector } from 'react-redux'
import { Typography } from 'antd'
import VideoDetail from "../videoDetail"
import VideoItem from "../items";

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
            <div className="youtube-videos">
                <VideoDetail />
                <div className={click === 'row' ? 'row-list' : "column-list"} >{renderedVideos}</div>
            </div>
        </>
    )
}
