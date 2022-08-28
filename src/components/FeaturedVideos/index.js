import Image from "next/image"
import { convertToInternationalCurrencySystem } from "../../util/functions.js"
import { VideoBtnBig } from "../Buttons"
import VideoItem from "../VideoItem"
import css from "./FeaturedVideo.module.css"
function FeaturedVideo(props) {


    let liveData = props.data.livedata[0]
    let mostLiked = props.data.somevideos.mostLiked[0]
    let mostViewed = props.data.somevideos.mostViewed[0]
    let mostCommented = props.data.somevideos.mostLiked[0]
    let recent = props.data.somevideos.recent[0]



    let whatToShow = (liveData.status === "offline") ? recent : liveData
    let date = new Date(whatToShow.publishedAt * 1000)
    date = date.toLocaleDateString("en-US")

    let youtube_thumnail = `https://i.ytimg.com/vi/${whatToShow.videoId}/maxresdefault.jpg`
    youtube_thumnail = (liveData.status === "offline") ? youtube_thumnail : liveData.thumbnail


    return (
        <div className={css.video_featured_grid}>
            <div className={css.video_featured_wrapper}>
                <div className={css.image_wrapper}>
                    <Image className={css.video_item_image} src={youtube_thumnail} width={1104} height={620} alt="" />
                    <div className={css.video_featured_filter}></div>
                    <VideoBtnBig w={30} h={30} ww={85} hh={85} />
                    <div className={css.video_featured_text}>{whatToShow.type}</div>
                </div>

                <div className={css.video_featured_content}>
                    <div className={"pd-right"}>
                        <Image className={css.video_featured_channel_image} src="https://raka.zone/internal_api/assets/img/instadp.jpeg" width={94} height={94} loading="eager" alt="Video Featured Channel Image" />
                    </div>
                    <div>
                        <h2 className={css.title}>{whatToShow.title}</h2>
                        <div className={css.video_featured_about}>
                            <div className={css.video_featured_duration}>
                                <div>{convertToInternationalCurrencySystem(whatToShow.viewCount)}</div>
                                <div>&nbsp;Views</div>
                            </div>
                            <div className={css.video_feature_about_divider}></div>
                            <div>{date}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${css.video_featured_secondary_grid} pd-bottom `}>
                <div className={css.video_featured_secondary_wrapper}>
                    <VideoItem data={mostViewed} />
                </div>
                <div className={css.video_featured_secondary_wrapper}>
                    <VideoItem data={mostCommented} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedVideo
