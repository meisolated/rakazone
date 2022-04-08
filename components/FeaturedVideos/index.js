import css from "./FeaturedVideo.module.css"
import Image from "next/image"
import { VideoButton } from "../Button"
import VideoItem from "../VideoItem"
function FeaturedVideo() {
    return (
        <div className={css.video_featured_grid}>
            <div className={css.video_featured_wrapper}>
                <div className={css.image_wrapper}>
                    <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={1104} height={620} alt="" />
                    <div className={css.video_featured_filter}></div>
                    <VideoButton w={30} h={30} ww={85} hh={85} />
                    <div className={css.video_featured_text}>Featured</div>
                </div>

                <div className={css.video_featured_content}>
                    <div className={"pd-right"}>
                        <Image className={css.video_featured_channel_image} src="https://raka.zone/assets/img/instadp.jpeg" width={94} height={94} loading="eager" alt="Video Featured Channel Image" />
                    </div>
                    <div>
                        <h2 className={css.title}>iOS 15 is now released: Top 5 new features!</h2>
                        <div className={css.video_featured_about}>
                            <div className={css.video_featured_duration}>
                                <div>12</div>
                                <div>&nbsp;min</div>
                            </div>
                            <div className={css.video_feature_about_divider}></div>
                            <div>15/9/21</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${css.video_featured_secondary_grid} pd-bottom `}>
                <div className={css.video_featured_secondary_wrapper}>
                    <VideoItem />
                </div>
                <div className={css.video_featured_secondary_wrapper}>
                    <VideoItem />
                </div>
            </div>
        </div>
    )
}

export default FeaturedVideo
