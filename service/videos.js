import fetch from 'node-fetch'
import { config } from 'dotenv'
import { CHANNEL_ID, NUMBER_OF_VIDEOS_TO_SHOW } from '../common/constants.js'
config()

const URL = `https://www.googleapis.com/youtube/v3/search?channelId=${CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}&part=snippet&order=date&maxResults=${NUMBER_OF_VIDEOS_TO_SHOW}`


async function getVideos() {
    const response = await fetch(URL)
    const data = await response.json();

    return data.items.map(item => {
        return {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt
        }
    });
}

export default getVideos