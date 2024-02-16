import axios from 'axios'

const KEY = 'AIzaSyBB9d_8RQWAyMLRXk9uLoL3LYNH8u3dnMo'

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResult: 12,
        key: KEY,
    }
})