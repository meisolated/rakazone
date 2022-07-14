import moment from "moment"
import { useEffect, useState } from "react"
import { VideoPlayerDesktop, VideoPlayerMobile } from "../../components/VideoPlayer/index.js"
import css from "./Watch.module.css"
export default function Watch() {
    const videoData = {
        title: "The best video player ever",
        viwes: "1.2M",
        ago: moment("2020-01-01").fromNow(),
        likes: "1.2M",
        dislikes: "Dislike",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, eget consectetur nisi nisl consectetur nisi.",
    }
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        if (typeof window === "undefined") return
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

    return (
        <div className="container-default">
            <div className={css.player_wrapper}>{isMobile ? <VideoPlayerMobile /> : <VideoPlayerDesktop />}</div>
            <div className={css.video_details}>
                <div className={css.video_details_wrapper}>
                    <div className={css.video_details_wrapper_left}>
                        <div className={css.video_details_wrapper_left_title}>
                            <h1>{videoData.title}</h1>
                        </div>
                        <div className={css.videoStats}>
                            <div className={css.videoStats_item}>{videoData.viwes} Views</div>
                            <div className={css.content_about_divider} />
                            <div className={css.videoStats_item}>{videoData.ago}</div>
                        </div>
                        <div className={css.video_other_details}>
                            <div className={css.video_other_details_item}>
                                <div className={`material-icons-round ${css.video_other_details_icons}`}>thumb_up</div>
                                <div className={css.video_other_details_text}>{videoData.likes}</div>
                            </div>
                            <div className={css.video_other_details_item}>
                                <div className={`material-icons-round ${css.video_other_details_icons}`}>thumb_down</div>
                                <div className={css.video_other_details_text}>{videoData.dislikes}</div>
                            </div>
                            <div className={css.video_other_details_item}>
                                <div className={`material-icons-round ${css.video_other_details_icons}`}>share</div>
                                <div className={css.video_other_details_text}>Share</div>
                            </div>
                            <div className={css.video_other_details_item}>
                                <div className={`material-icons-round ${css.video_other_details_icons}`}>attach_money</div>
                                <div className={css.video_other_details_text}>Thanks</div>
                            </div>
                        </div>
                        <div className={"divider"} />
                        <div className={css.video_description}>
                            <a>💲 UPI • rakazonegaming@oksbi <br />
                                💲 Sponsor • https://raka.zone/sponsor<br />
                                💲 Donation Via PayPal • https://raka.zone/paypal<br />
                                🙏Every Tip Is Appreciated </a>
                            <p>{videoData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
