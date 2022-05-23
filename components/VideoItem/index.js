import css from "./VideoItem.module.css"
import Image from "next/image"
import { VideoBtnSmall } from "../Buttons"
import moment from "moment"
import { convertToInternationalCurrencySystem } from "../../util/functions.js"
import Link from "next/link"
import playicon from "../../assets/img/playicon.svg"
import { useEffect, useState } from "react"

function VideoItem(props) {

    const [active, setActive] = useState(false)

    // useEffect(() => {

    // }, [])

    if (props.type === "empty") {
        return (
            <div className={css.video_item}>
                <div className={css.image_wrapper}>
                    <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={540} height={300} alt="" />
                    <div className={css.video_filter}></div>
                    <VideoBtnSmall where="/" />
                </div>
            </div>
        )
    } else {
        let videoData = props.data
        let publishedAt = videoData["publishedAt"]
        let ago = moment(publishedAt * 1000).fromNow()
        let views = convertToInternationalCurrencySystem(videoData.viewCount)
        let link = "/"
        return (
            <div className={css.video_item}>
                <div className={css.image_wrapper}>
                    <Image className={`${css.video_item_image} ${active ? css.image_active : css.image_inactive}`} src={videoData.thumbnail} width={540} height={300} alt="" />
                    <div className={`${css.video_filter}`}></div>
                    <Link href={link} passHref>
                        <div className={`${css.video_button_wrapper_big} ${active ? css.active : css.inactive}`} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)}>
                            <div className={css.video_button_big}>
                                <div className={css.button_wrapper_big}>
                                    <Image src={playicon} className={css.video_button_icon_big} layout="responsive" height={30} width={30} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={css.video_content}>
                    <div>
                        <h3 className={css.title}>{videoData.title}</h3>
                        <div className={css.video_about}>
                            <div className={css.video_duration}>
                                <div className="material-symbols-outlined">visibility</div>
                                <div>&nbsp;{views}</div>
                                <div>&nbsp;views</div>
                            </div>
                            <div className={css.video_about_divider}></div>
                            <div className="material-symbols-outlined">schedule</div>
                            <div>&nbsp;{ago}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default VideoItem
