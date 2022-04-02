import css from "./FeaturedVideo.module.css"
import Image from "next/image"
import VideoButton from "../VideoButton"
function FeaturedVideo() {
    return (
        <div className={css.video_featured_grid}>
            <div className={css.video_featured_wrapper}>
                <div className={css.image_wrapper}>
                    <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={1104} height={620} alt="" />
                    <div className={css.video_featured_filter}></div>
                    <VideoButton className={css.something} w={25} h={25} />

                </div>
            </div>
            <div className={css.video_featured_secondary_grid}>
                <div className={css.image_wrapper}>
                    <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={734 / 2} height={412 / 2} alt="" />
                </div>
                <div className={css.image_wrapper}>
                    <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={734 / 2} height={412 / 2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FeaturedVideo
