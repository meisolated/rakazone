import css from './LatestVideos.module.css'
import VideoItem from '../VideoItem'

function LastestVideos(props) {
    let mostLiked = props.data.mostLiked[0]
    let mostViewed = props.data.mostViewed[0]
    let mostCommented = props.data.mostLiked[0]
    mostLiked.title =
        mostLiked.title.length > 60
            ? mostLiked.title.substring(0, 60) + '...'
            : mostLiked.title
    mostViewed.title =
        mostViewed.title.length > 60
            ? mostViewed.title.substring(0, 60) + '...'
            : mostViewed.title
    mostCommented.title =
        mostCommented.title.length > 60
            ? mostCommented.title.substring(0, 60) + '...'
            : mostCommented.title

    return (
        <>
            <div className={css.home_latest_videos}>
                <div className={css.left}>
                    <h2 className={css.latest_videos_title}>Latest videos</h2>
                </div>
                <div className={css.right}>
                    <a
                        href="https://www.youtube.com/"
                        className={css.arrow_link}
                    >
                        <div className={css.arrow_link_text}>
                            Browse more videos
                        </div>
                    </a>
                </div>
            </div>
            <div className={css.latest_video_grid}>
                <VideoItem data={mostLiked} />
                <VideoItem data={mostViewed} />
                <VideoItem data={mostCommented} />
                <VideoItem data={mostLiked} />
                <VideoItem data={mostViewed} />
                <VideoItem data={mostCommented} />
            </div>
        </>
    )
}
export default LastestVideos
