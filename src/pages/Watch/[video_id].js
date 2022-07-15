import DonateModal from "components/Modal/donate.modal.js"
import useWindowSize from "Hooks/windowResize.hook.js"
import moment from "moment"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { VideoPlayerDesktop, VideoPlayerMobile } from "../../components/VideoPlayer/index.js"
import css from "./Watch.module.css"
export default function Watch() {
    const router = useRouter()
    let videoId = router.query.video_id
    let windowResize = useWindowSize()
    const videoData = {
        title: "The best video player ever",
        views: "1.2M",
        ago: moment("2020-01-01").fromNow(),
        likes: "1.2M",
        dislikes: "Dislike",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisi nisl consectetur nisi, eget consectetur nisi nisl consectetur nisi.",
    }
    const [showDonateModal, setShowDonateModal] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        if (typeof window === "undefined") return
        if (windowResize.width < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [windowResize])



    return (
        <div className="container-default">
            <div className={css.player_wrapper}>{isMobile ? <VideoPlayerMobile videoId={videoId} /> : <VideoPlayerDesktop videoId={videoId} />}</div>
            {isMobile ? mobileVideoDetails(videoData, setShowDonateModal) : desktopVideoDetails(videoData, setShowDonateModal)}
            {showDonateModal && <DonateModal show={true} onClose={() => setShowDonateModal(false)} />}
        </div>
    )
}

const mobileVideoDetails = (videoData, setShowDonateModal) => {
    return (
        <div className={css.mobile_video_details}>
            <div className={css.mobile_video_details_wrapper}>
                <div className={css.mobile_video_details_wrapper_left}>
                    <div className={css.mobile_video_details_wrapper_left_title}>
                        <h1>{videoData.title}</h1>
                    </div>
                    <div className={css.mobile_video_stats}>
                        <div className={css.mobile_videoStats_item}>{videoData.views} Views</div>
                        <div className={css.content_about_divider} />
                        <div className={css.mobile_videoStats_item}>{videoData.ago}</div>
                    </div>
                    <div className={css.mobile_video_other_details}>
                        <div className={css.mobile_video_other_details_item}>
                            <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>thumb_up</div>
                            <div className={css.mobile_video_other_details_text}>{videoData.likes}</div>
                        </div>
                        <div className={css.mobile_video_other_details_item}>
                            <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>thumb_down</div>
                            <div className={css.mobile_video_other_details_text}>{videoData.dislikes}</div>
                        </div>
                        <div className={css.mobile_video_other_details_item}>
                            <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>share</div>
                            <div className={css.mobile_video_other_details_text}>Share</div>
                        </div>
                        <div className={css.mobile_video_other_details_item} onClick={() => setShowDonateModal(true)}>
                            <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>attach_money</div>
                            <div className={css.mobile_video_other_details_text}>Thanks</div>
                        </div>
                    </div>
                    <div className={"divider"} />
                    <div className={css.mobile_video_description}>
                        <a>
                            {" "}
                            💲 UPI • rakazonegaming@oksbi <br />
                            💲 Sponsor • https://raka.zone/sponsor
                            <br />
                            💲 Donation Via PayPal • https://raka.zone/paypal
                            <br />
                            🙏 Every Tip Is Appreciated{" "}
                        </a>
                        <p>{videoData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const desktopVideoDetails = (videoData, setShowDonateModal) => {
    return (
        <div className={css.desktop_video_details}>
            <div className={css.desktop_video_details_wrapper_main}>
                <div className={css.desktop_video_details_wrapper}>
                    <div className={css.desktop_details_left}>
                        <div className={css.desktop_video_details_wrapper_title}>
                            <a className={css.desktop_video_title}>{videoData.title}</a>
                        </div>
                        <div className={css.desktop_video_stats}>
                            <div className={css.desktop_videoStats_item}>{videoData.views} Views</div>
                            <div className={css.content_about_divider} />
                            <div className={css.desktop_videoStats_item}>{videoData.ago}</div>
                        </div>
                    </div>
                    <div className={css.desktop_video_other_details}>
                        <div className={css.desktop_video_other_details_item}>
                            <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>thumb_up</div>
                            <div className={css.desktop_video_other_details_text}>{videoData.likes}</div>
                        </div>
                        <div className={css.desktop_video_other_details_item}>
                            <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>thumb_down</div>
                            <div className={css.desktop_video_other_details_text}>{videoData.dislikes}</div>
                        </div>
                        <div className={css.desktop_video_other_details_item}>
                            <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>share</div>
                            <div className={css.desktop_video_other_details_text}>Share</div>
                        </div>
                        <div className={css.desktop_video_other_details_item} onClick={() => setShowDonateModal(true)}>
                            <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>attach_money</div>
                            <div className={css.desktop_video_other_details_text}>Thanks</div>
                        </div>
                    </div>
                </div>
                <div className={"divider-small"} />
                <div className={css.desktop_video_description}>
                    <a>
                        {" "}
                        💲 UPI • rakazonegaming@oksbi <br />
                        💲 Sponsor • https://raka.zone/sponsor
                        <br />
                        💲 Donation Via PayPal • https://raka.zone/paypal
                        <br />
                        🙏 Every Tip Is Appreciated{" "}
                    </a>
                    <p>{videoData.description}</p>
                </div>
            </div>
        </div>
    )
}
