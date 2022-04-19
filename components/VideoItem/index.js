import css from "./VideoItem.module.css"
import Image from "next/image"
import { VideoButton } from "../Buttons"



function VideoItem() {
    return (
        <div className={css.video_item}>
            <div className={css.image_wrapper}>
                <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={540} height={300} alt="" />
                <div className={css.video_filter}></div>
                <VideoButton w={30} h={30} ww={85} hh={85} />
            </div>
            <div className={css.video_content}>
                <div>
                    <h3 className={css.title}>iOS 15 is now released: Top 5 new features!</h3>
                    <div className={css.video_about}>
                        <div className={css.video_duration}>
                            <div>12</div>
                            <div>&nbsp;min</div>
                        </div>
                        <div className={css.video_about_divider}></div>
                        <div>15/9/21</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoItem