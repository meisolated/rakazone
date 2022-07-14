import css from "./VideoItem.module.css"
import Image from "next/image"
import moment from "moment"
import { convertToInternationalCurrencySystem } from "../../util/functions.js"
import Link from "next/link"
import playicon from "../../assets/svg/src/playicon.svg"
import { useState } from "react"

export function EmptyVideoItem(props) {
    const [active, setActive] = useState(false)
    const link = props.link
    return (
        <div className={css.video_item}>
            <div className={`${css.image_wrapper}`}>
                <Image className={`${css.video_item_image} ${active ? css.image_active : css.image_inactive}`} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={540} height={300} alt="" />
                <div className={css.video_filter}></div>
                <Link href={link} passHref>
                    <div className={`${css.video_button_wrapper} ${active ? css.icon_active : css.icon_inactive}`} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)}>
                        <div className={css.video_button}>
                            <div className={css.button_wrapper}>
                                <Image src={playicon} className={css.video_button_icon} layout="responsive" height={30} width={30} alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export const VideoItemRegular = (props) => {
    const [active, setActive] = useState(false)
    let videoData = props.data
    let publishedAt = videoData["publishedAt"]
    let ago = moment(publishedAt * 1000).fromNow()
    let views = convertToInternationalCurrencySystem(videoData.viewCount)
    let link = "https://www.youtube.com/watch?v=" + videoData.videoId
    return (
        <div className={css.video_item}>
            <div className={css.image_wrapper}>
                <Image className={`${css.video_item_image} ${active ? css.image_active : css.image_inactive}`} src={videoData.thumbnail} width={540} height={300} alt="" />
                <div className={`${css.video_filter}`}></div>
                <Link href={link} passHref>
                    <div className={`${css.video_button_wrapper} ${active ? css.icon_active : css.icon_inactive}`} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)}>
                        <div className={css.video_button}>
                            <div className={css.button_wrapper}>
                                <Image src={playicon} className={css.video_button_icon} layout="responsive" height={30} width={30} alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={css.video_content}>
                <div>
                    <h3 className={css.content_title}>{videoData.title}</h3>
                    <div className={css.content_about}>
                        <div className={css.content_duration}>
                            <div className="material-symbols-outlined">visibility</div>
                            <div>&nbsp;{views}</div>
                            <div>&nbsp;views</div>
                        </div>
                        <div className={css.content_about_divider}></div>
                        <div className="material-symbols-outlined">schedule</div>
                        <div>&nbsp;{ago}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}