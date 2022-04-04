import css from "./LatestVideos.module.css"
import VideoItem from "../VideoItem"

function LastestVideos() {
    return (

        <>
            <div className={css.home_latest_videos}>
                <div className={css.left}>
                    <h2 className={css.latest_videos_title}>Latest videos</h2>
                </div>
                <div className={css.right}>
                    <a href="https://www.youtube.com/" className={css.arrow_link}>
                        <div className={css.arrow_link_text}>Browse more videos</div>

                    </a>
                </div>
            </div>
            <div className={css.latest_video_grid}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </div>
        </>
    )
}
export default LastestVideos
